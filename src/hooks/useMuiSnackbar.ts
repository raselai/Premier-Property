/**
 * MUI Snackbar Hook
 * Provides toast notifications using Material-UI Snackbar
 */

import { useCallback } from 'react';
import { useSnackbar, VariantType } from 'notistack';

export interface UseMuiSnackbarReturn {
    showSuccess: (message: string) => void;
    showError: (message: string) => void;
    showWarning: (message: string) => void;
    showInfo: (message: string) => void;
}

export function useMuiSnackbar(): UseMuiSnackbarReturn {
    const { enqueueSnackbar } = useSnackbar();

    const showMessage = useCallback(
        (message: string, variant: VariantType) => {
            enqueueSnackbar(message, {
                variant,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                autoHideDuration: 4000,
            });
        },
        [enqueueSnackbar]
    );

    const showSuccess = useCallback(
        (message: string) => showMessage(message, 'success'),
        [showMessage]
    );

    const showError = useCallback(
        (message: string) => showMessage(message, 'error'),
        [showMessage]
    );

    const showWarning = useCallback(
        (message: string) => showMessage(message, 'warning'),
        [showMessage]
    );

    const showInfo = useCallback(
        (message: string) => showMessage(message, 'info'),
        [showMessage]
    );

    return {
        showSuccess,
        showError,
        showWarning,
        showInfo,
    };
}

export default useMuiSnackbar;
