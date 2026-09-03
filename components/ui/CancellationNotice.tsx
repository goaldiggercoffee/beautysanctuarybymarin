import { CANCELLATION_POLICY } from '@/data/policies';

interface CancellationNoticeProps {
  /** Colour and spacing. Defaults suit a light card; pass white/light text on dark or gradient backgrounds. */
  className?: string;
  align?: 'left' | 'center';
}

/**
 * Sits directly under a booking CTA.
 *
 * Deliberately plain text rather than a blocking "I agree" modal: an extra
 * click between the client and Book Now costs real bookings, and the
 * disclosure only has to be legible at the moment of the decision — which it
 * is, right beside the button and again in the footer.
 */
const CancellationNotice = ({
  className = 'text-gray-500',
  align = 'center',
}: CancellationNoticeProps) => (
  <p
    className={`text-xs leading-relaxed flex items-start gap-1.5 ${
      align === 'center' ? 'justify-center text-center' : ''
    } ${className}`}
  >
    <svg
      className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>{CANCELLATION_POLICY}</span>
  </p>
);

export default CancellationNotice;
