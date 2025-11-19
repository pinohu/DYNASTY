/**
 * Function 1: Lead Scoring
 * Purpose: Calculate lead score based on multiple factors
 */
function calculateLeadScore(data) {
  let score = 0;
  
  // Company size scoring
  if (data.company_size === '201-1000 employees') score += 20;
  if (data.company_size === '1000+ employees') score += 30;
  
  // Budget authority scoring
  if (data.budget_authority === 'Decision Maker') score += 25;
  if (data.budget_authority === 'Strong Influence') score += 15;
  
  // Engagement scoring
  if (data.engagement_level === 'High Engagement') score += 20;
  if (data.engagement_level === 'Medium Engagement') score += 10;
  
  // Source scoring
  if (data.lead_source === 'Referral') score += 15;
  if (data.lead_source === 'Website Form') score += 10;
  
  // Value equation scoring
  if (data.calculated_value >= 7) score += 15;
  
  return Math.min(score, 100); // Cap at 100
}

// Usage: return calculateLeadScore($input);


/**
 * Function 2: Data Validation
 * Purpose: Validate and sanitize incoming data
 */
function validateAndSanitize(data) {
  const result = {
    valid: true,
    errors: [],
    sanitized: {}
  };
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    result.valid = false;
    result.errors.push('Invalid email address');
  } else {
    result.sanitized.email = data.email.toLowerCase().trim();
  }
  
  // Phone validation
  const phoneRegex = /^[\d\s\-\(\)]+$/;
  if (data.phone && !phoneRegex.test(data.phone)) {
    result.errors.push('Invalid phone format');
  } else if (data.phone) {
    result.sanitized.phone = data.phone.replace(/\D/g, '');
  }
  
  // Name sanitization
  if (data.name) {
    result.sanitized.name = data.name.trim().replace(/[<>]/g, '');
  }
  
  return result;
}

// Usage: return validateAndSanitize($input);


/**
 * Function 3: Duplicate Detection
 * Purpose: Check for existing contacts before creating new ones
 */
async function checkDuplicate(email, apiKey) {
  const response = await fetch('https://api.suitedash.com/v1/contacts', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    params: {
      email: email
    }
  });
  
  const data = await response.json();
  
  return {
    isDuplicate: data.contacts && data.contacts.length > 0,
    existingContact: data.contacts ? data.contacts[0] : null
  };
}

// Usage: return await checkDuplicate($input.email, $env.SUITEDASH_API_KEY);

