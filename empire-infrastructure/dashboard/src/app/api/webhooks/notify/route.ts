import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the lead to the server console (CloudWatch/Vercel Logs)
    console.log("------------------------------------------------");
    console.log("🚨 NEW LEAD NOTIFICATION 🚨");
    console.log("Name:", body.firstName);
    console.log("Email:", body.email);
    console.log("Interest:", body.primaryInterest);
    if (body.hasWealthPlan === 'no') {
        console.log(">>> OPPORTUNITY: No Wealth Plan detected!");
    }
    console.log("------------------------------------------------");

    // TODO: Integrate Resend/SendGrid here
    // await resend.emails.send({
    //   from: 'Empire Bot <leads@empire.com>',
    //   to: 'you@example.com',
    //   subject: `New Lead: ${body.firstName}`,
    //   react: <EmailTemplate ... />
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notification webhook error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}



