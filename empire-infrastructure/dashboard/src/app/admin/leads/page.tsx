"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Database } from "@/lib/database.types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // I will create this next
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, RefreshCw } from "lucide-react";

type Client = Database['public']['Tables']['clients']['Row'];

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (err: any) {
      console.error('Error fetching leads:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: Client['status']) => {
    try {
        const { error } = await supabase
            .from('clients')
            .update({ status: newStatus })
            .eq('id', id);
        
        if (error) throw error;
        
        // Optimistic update
        setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
    } catch (err: any) {
        console.error('Error updating status:', err);
        alert('Failed to update status');
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Lead Command Center</h1>
        <Button onClick={fetchLeads} variant="outline" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
            Refresh
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-4">
            Error: {error}
        </div>
      )}

      <Card>
        <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-muted/50">
                        <tr>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Interest</th>
                            <th className="px-6 py-3">Assets</th>
                            <th className="px-6 py-3">Wealth Plan?</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && leads.length === 0 ? (
                             <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-muted-foreground">
                                    <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                                </td>
                            </tr>
                        ) : leads.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-muted-foreground">
                                    No leads found.
                                </td>
                            </tr>
                        ) : (
                            leads.map((lead) => (
                                <tr key={lead.id} className="border-b hover:bg-muted/50 transition-colors">
                                    <td className="px-6 py-4">
                                        {new Date(lead.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 font-medium">
                                        {lead.first_name}<br/>
                                        <span className="text-xs text-muted-foreground">{lead.email}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge variant="outline" className="uppercase">{lead.primary_interest}</Badge>
                                    </td>
                                    <td className="px-6 py-4">
                                        {lead.investable_assets || '-'}
                                    </td>
                                    <td className="px-6 py-4">
                                        {lead.has_wealth_plan ? (
                                            <span className="text-green-600 font-medium">Yes</span>
                                        ) : (
                                            <span className="text-amber-600 font-medium">No (Opp)</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={lead.status} />
                                    </td>
                                    <td className="px-6 py-4">
                                        {lead.status === 'lead' && (
                                            <Button size="sm" onClick={() => updateStatus(lead.id, 'contacted')}>
                                                Mark Contacted
                                            </Button>
                                        )}
                                         {lead.status === 'contacted' && (
                                            <Button size="sm" variant="default" onClick={() => updateStatus(lead.id, 'client')}>
                                                Convert
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatusBadge({ status }: { status: Client['status'] }) {
    switch (status) {
        case 'lead': return <Badge variant="secondary">New Lead</Badge>;
        case 'contacted': return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Contacted</Badge>;
        case 'client': return <Badge className="bg-green-600">Client</Badge>;
        case 'churned': return <Badge variant="destructive">Churned</Badge>;
        default: return <Badge variant="outline">{status}</Badge>;
    }
}

