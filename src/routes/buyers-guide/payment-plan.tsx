/**
 * Payment Plan Route
 * Details about flexible payment options
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const PaymentPlanPage = lazy(() =>
    import('@/components/PaymentPlanPage/PaymentPlanPage').then((module) => ({
        default: module.PaymentPlanPage,
    }))
);

export const Route = createFileRoute('/buyers-guide/payment-plan')({
    component: PaymentPlanPageRoute,
    loader: () => ({
        crumb: 'Payment Plan',
    }),
});

function PaymentPlanPageRoute() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <PaymentPlanPage />
        </SuspenseLoader>
    );
}

export default PaymentPlanPageRoute;
