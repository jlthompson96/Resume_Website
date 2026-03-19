import React, { useState } from 'react';
import { Box, Typography, Button, Menu, MenuItem, Divider } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDownload = (format) => {
        const fileName = format === 'pdf' 
            ? 'Joseph_Thompson_Resume.pdf' 
            : 'Joseph_Thompson_Resume.docx';
        
        // Create a temporary link element to trigger download
        const link = document.createElement('a');
        link.href = fileName;
        link.download = fileName;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        handleClose();
    };

    return (
        <Box sx={{ py: { xs: 3, sm: 6 }, textAlign: 'center', position: 'relative' }}>
            <Typography
                variant="h2"
                gutterBottom
                sx={{
                    textShadow: '0 0 10px #00e5ff',
                    animation: 'flicker 3s infinite',
                }}
            >
                Joey Thompson
            </Typography>
            {/* On mobile, break subtitle into stacked lines for readability */}
            <Box sx={{ display: { xs: 'flex', sm: 'block' }, flexDirection: 'column', alignItems: 'center', gap: 0.5, mb: { xs: 0, sm: 1 } }}>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    sx={{ letterSpacing: { xs: '1px', sm: '2px' } }}
                >
                    Senior Software Engineer
                </Typography>
                <Typography
                    variant="h6"
                    color="textSecondary"
                    aria-label="Tech Enthusiast | Fraud Technology"
                    sx={{ display: { xs: 'block', sm: 'none' }, letterSpacing: '1px' }}
                >
                    Tech Enthusiast | Fraud Technology
                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    sx={{ display: { xs: 'none', sm: 'block' }, letterSpacing: '2px' }}
                >
                    Tech Enthusiast | Fraud Technology
                </Typography>
            </Box>
            <Button
                variant="contained"
                startIcon={<GetAppIcon />}
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
                sx={{ mt: 2, px: { xs: 2, sm: 4 }, py: 1.5, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}
            >
                Download Resume
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem onClick={() => handleDownload('pdf')}>
                    <PictureAsPdfIcon sx={{ mr: 1 }} />
                    PDF Format
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleDownload('docx')}>
                    <DescriptionIcon sx={{ mr: 1 }} />
                    Word Document
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default Header;