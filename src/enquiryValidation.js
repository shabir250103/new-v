export function localToday(now = new Date()) {
  return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
}

export function validateEnquiry(input, today = localToday()) {
  const values = Object.fromEntries(['name', 'phone', 'date', 'destination'].map(key => [key, String(input[key] ?? '').trim()]));
  const errors = {};
  if (values.name.length < 2 || values.name.length > 100 || !/^[\p{L}\p{M} .\u2019'-]+$/u.test(values.name) || !/\p{L}/u.test(values.name)) {
    errors.name = 'Enter your name using 2-100 characters, with letters, spaces, apostrophes, dots or hyphens.';
  }
  const phone = values.phone.replace(/[ ()-]/g, '');
  const indian = /^(?:\+91|91)?[6-9]\d{9}$/.test(phone);
  const international = /^\+[1-9]\d{7,14}$/.test(phone) && !phone.startsWith('+91');
  if (!/^[+\d ()-]+$/.test(values.phone) || (!indian && !international)) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number, or an international number starting with + and its country code.';
  }
  const date = new Date(values.date + 'T12:00:00');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(values.date) || Number.isNaN(date.getTime()) || localToday(date) !== values.date || values.date < today) {
    errors.date = 'Choose today or a future travel date.';
  }
  if (values.destination.length < 2 || values.destination.length > 120 || !/\p{L}/u.test(values.destination) || /[\r\n\t]/.test(values.destination)) {
    errors.destination = 'Enter a destination using 2-120 characters, such as Kerala or Bali.';
  }
  return { values, errors };
}

export function validateEnquiryForm(form) {
  const result = validateEnquiry(Object.fromEntries(new FormData(form)));
  for (const field of ['name', 'phone', 'date', 'destination']) {
    form.elements.namedItem(field).setCustomValidity(result.errors[field] || '');
  }
  return form.reportValidity() ? result.values : null;
}

export function enquiryUrl(values) {
  const message = 'Hello NewV Tours and Travels! I would like to enquire about a trip.\n\n'
    + '*Name:* ' + values.name + '\n*Phone:* ' + values.phone
    + '\n*Travel Date:* ' + values.date + '\n*Destination:* ' + values.destination;
  return 'https://wa.me/919840636358?text=' + encodeURIComponent(message);
}
