from django import forms

class ContactForm(forms.Form):
    from_email = forms.EmailField(required=True)
    subject = forms.CharField(max_length=100)
    message = forms.CharField(widget=forms.Textarea)
    '''
    key = '354df29d026a45d8f207d6b1cac3e202-52b0ea77-988696a1'
    sandbox = 'sandbox6bcf66e5b3ee488daeb9d18341391386.mailgun.org'
    recipient = 'andyval4@gmail.com'

    request_url = 'https://api.mailgun.net/v2/{0}/messages'.format(sandbox)
    request = requests.post(request_url, auth=('api', key), data={
        'from': 'andyval4@gmail.com',
        'to': recipient,
        'subject': 'Hello',
        'text': 'Hello from Mailgun'
    })

    print 'Status: {0}'.format(request.status_code)
    print 'Body:   {0}'.format(request.text)
    '''

