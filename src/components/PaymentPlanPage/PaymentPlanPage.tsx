/**
 * Payment Plan Page Component
 * Details about flexible payment options
 */

import React from 'react';
import { Box, Container, Typography, Grid, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    AccountBalance as BankIcon,
    Schedule as ScheduleIcon,
    Paid as PaidIcon,
    Receipt as ReceiptIcon,
    CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const styles: Record<string, SxProps<Theme>> = {
    heroSection: {
        position: 'relative',
        minHeight: { xs: '300px', md: '400px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
        },
    },
    heroContent: {
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        px: 3,
    },
    heroTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
        fontWeight: 700,
        color: '#FFFFFF',
        mb: 2,
        textShadow: '0 2px 20px rgba(0,0,0,0.2)',
    },
    heroSubtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1.1rem', md: '1.3rem' },
        fontWeight: 400,
        color: 'rgba(255,255,255,0.95)',
        maxWidth: '800px',
        mx: 'auto',
    },
    section: {
        py: { xs: 8, md: 12 },
    },
    sectionAlt: {
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
    },
    sectionTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 3,
        textAlign: 'center',
    },
    sectionSubtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1rem', md: '1.1rem' },
        fontWeight: 400,
        color: '#666666',
        textAlign: 'center',
        maxWidth: '800px',
        mx: 'auto',
        mb: 6,
        lineHeight: 1.8,
    },
    planCard: {
        height: '100%',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(15, 81, 50, 0.12)',
        border: '2px solid rgba(15, 81, 50, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: '#0F5132',
            boxShadow: '0 12px 40px rgba(15, 81, 50, 0.18)',
            transform: 'translateY(-4px)',
        },
    },
    planHeader: {
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        color: '#FFFFFF',
        p: 3,
        borderRadius: '18px 18px 0 0',
        textAlign: 'center',
    },
    planTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.5rem', md: '1.8rem' },
        fontWeight: 700,
        mb: 1,
    },
    planSubtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        color: 'rgba(255,255,255,0.9)',
    },
    planContent: {
        p: 4,
    },
    featureItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        mb: 2,
    },
    featureText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        color: '#555555',
        lineHeight: 1.8,
    },
    tableContainer: {
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(15, 81, 50, 0.08)',
        overflow: 'hidden',
    },
    tableHeader: {
        backgroundColor: '#0F5132',
        '& .MuiTableCell-head': {
            color: '#FFFFFF',
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
        },
    },
    tableCell: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.95rem',
        color: '#555555',
    },
    infoBox: {
        background: '#FFFFFF',
        borderRadius: '16px',
        p: 4,
        border: '2px solid rgba(15, 81, 50, 0.15)',
        mb: 3,
    },
    infoTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '1.3rem',
        fontWeight: 700,
        color: '#0F5132',
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
    },
    infoText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        color: '#555555',
        lineHeight: 1.8,
        mb: 1.5,
    },
    highlightBox: {
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        borderRadius: '20px',
        p: { xs: 4, md: 5 },
        color: '#FFFFFF',
        textAlign: 'center',
    },
    highlightTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.5rem', md: '1.8rem' },
        fontWeight: 700,
        mb: 2,
    },
    highlightText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1rem', md: '1.05rem' },
        fontWeight: 400,
        lineHeight: 1.8,
        color: 'rgba(255,255,255,0.95)',
        mb: 1.5,
    },
};

const paymentPlans = [
    {
        title: 'Standard Plan',
        subtitle: 'Flexible Installments',
        features: [
            'Booking Money: 10% of total price',
            'Down Payment: 20% within 30 days',
            'Remaining 70% in monthly installments',
            'Duration: Up to 36 months',
            'No hidden charges',
            'Early payment discount available',
        ],
    },
    {
        title: 'Construction-Linked',
        subtitle: 'Pay as We Build',
        features: [
            'Booking Money: 10% of total price',
            'Foundation completion: 15%',
            'Structural completion: 25%',
            'Finishing stage: 30%',
            'Final handover: 20%',
            'Tied to construction milestones',
        ],
    },
    {
        title: 'Bank Financing',
        subtitle: 'Home Loan Assistance',
        features: [
            'Up to 80% financing available',
            'Competitive interest rates',
            'Tenure up to 25 years',
            'Minimal documentation',
            'Quick approval process',
            'We assist with loan processing',
        ],
    },
];

const sampleSchedule = [
    { stage: 'Booking', percentage: '10%', timing: 'At booking' },
    { stage: 'Down Payment', percentage: '20%', timing: 'Within 30 days' },
    { stage: 'Month 1-12', percentage: '20%', timing: '1.67% monthly' },
    { stage: 'Month 13-24', percentage: '25%', timing: '2.08% monthly' },
    { stage: 'Month 25-36', percentage: '25%', timing: '2.08% monthly' },
];

export const PaymentPlanPage: React.FC = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.heroSection}>
                <Box sx={styles.heroContent}>
                    <Typography variant='h1' sx={styles.heroTitle}>
                        Payment Plans
                    </Typography>
                    <Typography sx={styles.heroSubtitle}>
                        Flexible and transparent payment options designed to make your dream home
                        affordable and accessible
                    </Typography>
                </Box>
            </Box>

            {/* Payment Plans Section */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Our Payment Options</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Choose the payment plan that best suits your financial situation
                    </Typography>

                    <Grid container spacing={4}>
                        {paymentPlans.map((plan, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card sx={styles.planCard}>
                                    <Box sx={styles.planHeader}>
                                        <Typography sx={styles.planTitle}>{plan.title}</Typography>
                                        <Typography sx={styles.planSubtitle}>
                                            {plan.subtitle}
                                        </Typography>
                                    </Box>
                                    <Box sx={styles.planContent}>
                                        {plan.features.map((feature, idx) => (
                                            <Box key={idx} sx={styles.featureItem}>
                                                <CheckCircleIcon
                                                    sx={{ color: '#0F5132', fontSize: '1.3rem', mt: 0.2 }}
                                                />
                                                <Typography sx={styles.featureText}>
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Sample Payment Schedule */}
            <Box sx={styles.sectionAlt}>
                <Container maxWidth='lg'>
                    <Typography sx={styles.sectionTitle}>Sample Payment Schedule</Typography>
                    <Typography sx={styles.sectionSubtitle}>
                        Example of a standard 36-month installment plan (illustrative purposes only)
                    </Typography>

                    <TableContainer component={Paper} sx={styles.tableContainer}>
                        <Table>
                            <TableHead sx={styles.tableHeader}>
                                <TableRow>
                                    <TableCell>Payment Stage</TableCell>
                                    <TableCell align='center'>Percentage</TableCell>
                                    <TableCell align='right'>Payment Timing</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sampleSchedule.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            '&:nth-of-type(even)': {
                                                backgroundColor: 'rgba(15, 81, 50, 0.02)',
                                            },
                                        }}
                                    >
                                        <TableCell sx={styles.tableCell}>{row.stage}</TableCell>
                                        <TableCell align='center' sx={styles.tableCell}>
                                            <strong>{row.percentage}</strong>
                                        </TableCell>
                                        <TableCell align='right' sx={styles.tableCell}>
                                            {row.timing}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography
                        sx={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '0.9rem',
                            color: '#666666',
                            mt: 3,
                            fontStyle: 'italic',
                            textAlign: 'center',
                        }}
                    >
                        * This is a sample schedule. Actual payment plans may vary based on project
                        and agreement terms.
                    </Typography>
                </Container>
            </Box>

            {/* Additional Details */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box sx={styles.infoBox}>
                                <Typography sx={styles.infoTitle}>
                                    <ReceiptIcon sx={{ color: '#0F5132', fontSize: '2rem' }} />
                                    Payment Methods Accepted
                                </Typography>
                                <Typography sx={styles.infoText}>
                                    <CheckCircleIcon sx={{ color: '#0F5132', fontSize: '1.1rem', verticalAlign: 'middle', mr: 1 }} />
                                    Bank transfer (preferred method)
                                </Typography>
                                <Typography sx={styles.infoText}>
                                    <CheckCircleIcon sx={{ color: '#0F5132', fontSize: '1.1rem', verticalAlign: 'middle', mr: 1 }} />
                                    Pay order/Demand draft
                                </Typography>
                                <Typography sx={styles.infoText}>
                                    <CheckCircleIcon sx={{ color: '#0F5132', fontSize: '1.1rem', verticalAlign: 'middle', mr: 1 }} />
                                    Cheque (account payee)
                                </Typography>
                                <Typography sx={styles.infoText}>
                                    <CheckCircleIcon sx={{ color: '#0F5132', fontSize: '1.1rem', verticalAlign: 'middle', mr: 1 }} />
                                    Online banking
                                </Typography>
                                <Typography sx={{...styles.infoText, mt: 2, fontStyle: 'italic', fontSize: '0.9rem'}}>
                                    Note: Cash payments are not accepted as per company policy
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={styles.infoBox}>
                                <Typography sx={styles.infoTitle}>
                                    <PaidIcon sx={{ color: '#0F5132', fontSize: '2rem' }} />
                                    Additional Costs
                                </Typography>
                                <Typography sx={styles.infoText}>
                                    <strong>Registration Fees:</strong> Buyer's responsibility (typically 1.5-2% of property value)
                                </Typography>
                                <Typography sx={styles.infoText}>
                                    <strong>Stamp Duty:</strong> As per government regulation
                                </Typography>
                                <Typography sx={styles.infoText}>
                                    <strong>Utility Connections:</strong> Electricity, gas, water security deposits
                                </Typography>
                                <Typography sx={styles.infoText}>
                                    <strong>Car Parking:</strong> If opted (prices vary by project)
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Bank Partners Section */}
            <Box sx={styles.sectionAlt}>
                <Container maxWidth='md'>
                    <Box sx={styles.highlightBox}>
                        <BankIcon sx={{ fontSize: '3rem', mb: 2 }} />
                        <Typography sx={styles.highlightTitle}>
                            Home Loan Assistance Available
                        </Typography>
                        <Typography sx={styles.highlightText}>
                            We have partnerships with leading banks in Bangladesh to facilitate your
                            home loan process. Our team will assist you with documentation and liaise
                            with banks on your behalf.
                        </Typography>
                        <Typography sx={styles.highlightText}>
                            <strong>Partner Banks Include:</strong> Dutch-Bangla Bank, BRAC Bank, Eastern Bank,
                            Standard Chartered, City Bank, and more.
                        </Typography>
                        <Typography sx={styles.highlightText}>
                            Contact our sales team to discuss financing options tailored to your needs.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Important Notes */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    <Box sx={styles.infoBox}>
                        <Typography sx={styles.infoTitle}>
                            <ScheduleIcon sx={{ color: '#0F5132', fontSize: '2rem' }} />
                            Important Information
                        </Typography>
                        <Typography sx={styles.infoText}>
                            ✓ All payments must be made according to the agreed schedule in the sale agreement
                        </Typography>
                        <Typography sx={styles.infoText}>
                            ✓ Late payment may incur additional charges as per agreement terms
                        </Typography>
                        <Typography sx={styles.infoText}>
                            ✓ Payment receipts will be issued for every transaction
                        </Typography>
                        <Typography sx={styles.infoText}>
                            ✓ Early payment discounts may be available - please consult with our sales team
                        </Typography>
                        <Typography sx={styles.infoText}>
                            ✓ Payment schedules can be customized based on buyer requirements (subject to approval)
                        </Typography>
                        <Typography sx={styles.infoText}>
                            ✓ All prices and payment terms are subject to change without prior notice
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default PaymentPlanPage;
