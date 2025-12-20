/**
 * FAQ Page Component
 * Frequently Asked Questions about buying property
 */

import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    HelpOutline as HelpIcon,
    Home as HomeIcon,
    Payment as PaymentIcon,
    Gavel as LegalIcon,
} from '@mui/icons-material';
import { ContactFooterSection } from '@/components/ContactFooterSection';

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
            background: 'radial-gradient(circle at 60% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
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
    categoryTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.8rem', md: '2.2rem' },
        fontWeight: 700,
        color: '#0F5132',
        mb: 3,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
    },
    categoryIcon: {
        fontSize: '2.5rem',
        color: '#0F5132',
    },
    accordion: {
        borderRadius: '12px !important',
        mb: 2,
        boxShadow: '0 2px 12px rgba(15, 81, 50, 0.08)',
        border: '1px solid rgba(15, 81, 50, 0.1)',
        '&:before': {
            display: 'none',
        },
        '&.Mui-expanded': {
            margin: '0 0 16px 0',
            boxShadow: '0 4px 20px rgba(15, 81, 50, 0.15)',
            borderColor: '#0F5132',
        },
    },
    accordionSummary: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.05rem', md: '1.15rem' },
        fontWeight: 600,
        color: '#1A1A1A',
        '&.Mui-expanded': {
            color: '#0F5132',
        },
    },
    accordionDetails: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        color: '#555555',
        lineHeight: 1.8,
        pt: 0,
    },
    contactBox: {
        background: 'linear-gradient(135deg, #0F5132 0%, #1A6B45 100%)',
        borderRadius: '20px',
        p: { xs: 4, md: 5 },
        color: '#FFFFFF',
        textAlign: 'center',
        mt: 6,
    },
    contactTitle: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: { xs: '1.8rem', md: '2.2rem' },
        fontWeight: 700,
        mb: 2,
    },
    contactText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1rem', md: '1.1rem' },
        fontWeight: 400,
        lineHeight: 1.8,
        color: 'rgba(255,255,255,0.95)',
    },
};

const faqCategories = [
    {
        category: 'General Questions',
        icon: <HelpIcon sx={styles.categoryIcon} />,
        faqs: [
            {
                question: 'How long has Premier Housing & Developments Ltd been in business?',
                answer: 'We have been serving customers since 1995, with nearly 30 years of experience in residential real estate development. We became a proud member of REHAB (Real Estate and Housing Association of Bangladesh) in 2008.',
            },
            {
                question: 'What types of properties do you develop?',
                answer: 'We specialize in residential apartment projects, focusing on creating luxurious and comfortable homes in prime locations across Dhaka. Our projects range from mid-rise to high-rise apartment buildings with modern amenities.',
            },
            {
                question: 'Are your projects RAJUK approved?',
                answer: 'Yes, all our projects have proper RAJUK (Rajdhani Unnayan Kartripakkha) approval. We ensure full compliance with all regulatory requirements and building codes.',
            },
            {
                question: 'Can I visit the project site?',
                answer: 'Absolutely! We encourage potential buyers to visit our project sites. Please contact our sales office to schedule a site visit at your convenience. Our team will be happy to show you around and answer any questions.',
            },
            {
                question: 'Do you offer joint venture opportunities for landowners?',
                answer: 'Yes, we actively partner with landowners through joint venture and land-sharing arrangements. Please visit our Landowner Solutions page or contact us directly to discuss partnership opportunities.',
            },
        ],
    },
    {
        category: 'Buying Process',
        icon: <HomeIcon sx={styles.categoryIcon} />,
        faqs: [
            {
                question: 'What is the first step to buying an apartment?',
                answer: 'The first step is to visit our office or project site, select your preferred apartment, and pay the booking money (typically 10% of the total price). Our sales team will guide you through the entire process.',
            },
            {
                question: 'How long does the buying process take?',
                answer: 'After booking, the documentation and agreement signing process typically takes 7-14 days, depending on how quickly you can provide the required documents and complete verification.',
            },
            {
                question: 'Can foreigners or NRBs buy property?',
                answer: 'Yes, both Non-Resident Bangladeshis (NRBs) and foreign nationals can purchase property. However, foreign nationals require approval from Bangladesh Investment Development Authority (BIDA). We assist with the necessary documentation.',
            },
            {
                question: 'What documents do I need to provide?',
                answer: 'For Bangladeshi nationals: National ID, TIN certificate, passport-size photos, bank solvency certificate, and utility bill. For NRBs and foreigners, additional documents like passport, work permit, and authorization letters are required.',
            },
            {
                question: 'Is the booking money refundable?',
                answer: 'Booking money refund policy varies by project and circumstances. Please refer to your booking agreement for specific terms. Generally, if the company fails to deliver as per agreement, booking money is refundable.',
            },
        ],
    },
    {
        category: 'Payment & Financing',
        icon: <PaymentIcon sx={styles.categoryIcon} />,
        faqs: [
            {
                question: 'What payment plans do you offer?',
                answer: 'We offer multiple payment options: Standard installment plan (up to 36 months), construction-linked payment plan, and bank financing options. Each plan has different down payment and installment structures.',
            },
            {
                question: 'Do you assist with bank loans?',
                answer: 'Yes, we have partnerships with leading banks in Bangladesh and assist buyers with home loan processing. Our team can help with documentation and liaise with banks on your behalf.',
            },
            {
                question: 'What percentage can I finance through a bank loan?',
                answer: 'Most banks offer up to 70-80% financing of the property value, depending on your income, creditworthiness, and the bank\'s policies. The exact percentage varies by bank and individual circumstances.',
            },
            {
                question: 'What payment methods are accepted?',
                answer: 'We accept bank transfers, pay orders, demand drafts, account payee cheques, and online banking. For security and transparency, we do not accept cash payments.',
            },
            {
                question: 'Are there any hidden charges?',
                answer: 'No, we believe in complete transparency. All costs are clearly mentioned in the sale agreement, including the apartment price, car parking (if applicable), and any other charges. Additional costs like registration fees and stamp duty are buyer\'s responsibility as per standard practice.',
            },
            {
                question: 'Is there a penalty for late payment?',
                answer: 'Late payment charges may apply as per the sale agreement terms. We recommend adhering to the payment schedule. If you anticipate any payment difficulties, please contact our accounts department in advance.',
            },
        ],
    },
    {
        category: 'Legal & Documentation',
        icon: <LegalIcon sx={styles.categoryIcon} />,
        faqs: [
            {
                question: 'How secure is the land title?',
                answer: 'All our projects are on clear land titles, verified by legal experts. We conduct thorough due diligence and ensure all land documentation is in order before starting any project.',
            },
            {
                question: 'When will I get the registration deed?',
                answer: 'Property registration is typically completed at the time of handover or shortly after, once all payments are cleared. The registration process is done at the Sub-Registry Office with both parties present.',
            },
            {
                question: 'Who bears the registration cost?',
                answer: 'As per standard industry practice, registration fees, stamp duty, and related costs are borne by the buyer. These costs are typically 1.5-2% of the property value.',
            },
            {
                question: 'What happens if the project is delayed?',
                answer: 'We make every effort to complete projects on time. In case of any delays, buyers are informed in advance. Delay compensation terms, if applicable, are mentioned in the sale agreement.',
            },
            {
                question: 'Can I resell the apartment before handover?',
                answer: 'Yes, buyers can transfer their booking to another party before handover, subject to company approval and completion of transfer formalities. Transfer fees may apply as per company policy.',
            },
        ],
    },
];

export const FAQPage: React.FC = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={styles.heroSection}>
                <Box sx={styles.heroContent}>
                    <Typography variant='h1' sx={styles.heroTitle}>
                        Frequently Asked Questions
                    </Typography>
                    <Typography sx={styles.heroSubtitle}>
                        Find answers to common questions about buying property with Premier Housing
                        & Developments Ltd
                    </Typography>
                </Box>
            </Box>

            {/* FAQ Sections */}
            <Box sx={styles.section}>
                <Container maxWidth='lg'>
                    {faqCategories.map((category, catIndex) => (
                        <Box key={catIndex} sx={{ mb: 8 }}>
                            <Typography sx={styles.categoryTitle}>
                                {category.icon}
                                {category.category}
                            </Typography>

                            {category.faqs.map((faq, faqIndex) => {
                                const panelId = `panel-${catIndex}-${faqIndex}`;
                                return (
                                    <Accordion
                                        key={faqIndex}
                                        expanded={expanded === panelId}
                                        onChange={handleChange(panelId)}
                                        sx={styles.accordion}
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                <ExpandMoreIcon
                                                    sx={{
                                                        color: expanded === panelId ? '#0F5132' : '#666666',
                                                    }}
                                                />
                                            }
                                        >
                                            <Typography sx={styles.accordionSummary}>
                                                {faq.question}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography sx={styles.accordionDetails}>
                                                {faq.answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })}
                        </Box>
                    ))}

                    {/* Still Have Questions Section */}
                    <Box sx={styles.contactBox}>
                        <HelpIcon sx={{ fontSize: '3rem', mb: 2 }} />
                        <Typography sx={styles.contactTitle}>
                            Still Have Questions?
                        </Typography>
                        <Typography sx={styles.contactText}>
                            Our team is here to help! Contact us via phone, email, or visit our office
                            for personalized assistance. We're committed to making your home buying
                            journey smooth and transparent.
                        </Typography>
                        <Typography sx={{ ...styles.contactText, mt: 3 }}>
                            <strong>Phone:</strong> +880 XXX-XXXXXXX
                            <br />
                            <strong>Email:</strong> info@premierhousing.com
                            <br />
                            <strong>Office Hours:</strong> Saturday - Thursday, 10:00 AM - 6:00 PM
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Contact & Footer Section */}
            <ContactFooterSection />
        </Box>
    );
};

export default FAQPage;
