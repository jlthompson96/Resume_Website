// src/components/Contact.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser';

function Contact() {
    const [sending, setSending] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setStatus('');

        const serviceID = 'portfolio_site';
        const templateID = 'template_pdy1ppr';
        const publicKey = 'BfBU5ilkuLlm9zbYY';

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Transmission sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setStatus('Error: Transmission failed.');
            })
            .finally(() => {
                setSending(false);
            });
    };

    return (
        <Box sx={{ py: { xs: 3, sm: 6 } }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ textShadow: '0 0 5px #ff00e4', mb: 4 }}
            >
                Transmission Hub
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ maxWidth: 500, mx: 'auto', p: { xs: 2, sm: 3 }, border: '1px solid #00e5ff' }}
            >
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                    required
                />
                <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                    required
                />
                <Button type="submit" variant="contained" disabled={sending}>
                    {sending ? 'Encrypting...' : 'Send Transmission'}
                </Button>
                {status && (
                    <Typography
                        sx={{
                            mt: 2,
                            color: status.includes('Error') ? '#ff00e4' : '#00e5ff',
                            animation: 'pulse 1s infinite',
                        }}
                    >
                        {status}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default Contact;