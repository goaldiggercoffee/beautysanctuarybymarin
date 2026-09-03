/**
 * Booking policies clients have to see before they commit to an appointment.
 *
 * The fee and the window live here rather than inline in the components: the
 * notice appears next to every paid booking CTA and in the footer, and a client
 * who was quoted "24 hours" in one place and "48 hours" in another has a fair
 * argument against the charge. One string, one number, no drift.
 */

export const CANCELLATION_FEE = '$50';
export const CANCELLATION_WINDOW_HOURS = 48;

export const CANCELLATION_POLICY =
  `Cancellations and reschedules made less than ${CANCELLATION_WINDOW_HOURS} hours ` +
  `before your appointment are subject to a ${CANCELLATION_FEE} fee.`;
