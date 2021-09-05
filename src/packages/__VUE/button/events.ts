export function getphonenumber(): Event {
  // const event = document.createEvent('Event');
  // event.initEvent('getphonenumber', true, true);

  const event = new CustomEvent('getphonenumber', {
    detail: {
      encryptedData:
        '7Fy+ePgldzn2zveofG73KZ2656QIr/jopER6od6yrj1ZwbTBrMCNHyhJAUUn7bibFN5PSSd9R6VRuyn3QVdEFsKktSsnWYpXJX/mbxfOLVib7tLw81Ytpw/JfUwuFq5YVycgwSVpKZPb1AGNAFEt1QqerPJ+BbLVb1zIxLXDxYnfJytrxD7rKt8siLo2QYCbw0XIG1OD4CJPG9+1LQ7d3A==',
      errMsg: 'getPhoneNumber:ok',
      iv: 'k0OOj99o/+4iGWfABoLN2w=='
    }
  });

  return event;
}
