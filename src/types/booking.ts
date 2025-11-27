/**
 * Property Booking/Viewing TypeScript Interfaces
 */

export interface Booking {
    id: number;
    propertyId: number;
    agentId: number;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    scheduledDate: string;
    scheduledTime: string;
    duration: number;
    status: BookingStatus;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

export type BookingStatus =
    | 'Pending'
    | 'Confirmed'
    | 'Completed'
    | 'Cancelled'
    | 'No-Show';

export interface BookingSlot {
    date: string;
    time: string;
    available: boolean;
}

export interface CreateBookingPayload {
    propertyId: number;
    agentId: number;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    scheduledDate: string;
    scheduledTime: string;
    duration: number;
    notes?: string;
}

export type UpdateBookingPayload = Partial<Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>>;

export interface BookingFilters {
    propertyId?: number;
    agentId?: number;
    status?: BookingStatus;
    startDate?: string;
    endDate?: string;
}
