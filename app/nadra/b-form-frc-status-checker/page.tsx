import type { Metadata } from 'next';
import BFormFrcStatusCheckPage, { metadata as baseMetadata } from '../b-form-frc-status-check/page';

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/nadra/b-form-frc-status-check',
  },
};

export default BFormFrcStatusCheckPage;
