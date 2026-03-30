import { weddingDetails } from '@/lib/content/wedding-details';

export const eventConfig = {
  dateLabel: weddingDetails.event.dateLabel,
  ceremonyTime: weddingDetails.event.ceremonyTime,
  receptionTime: weddingDetails.event.receptionTime,
  cityLabel: weddingDetails.event.cityLabel,
} as const;
