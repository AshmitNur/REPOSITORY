// SummarizeGmail Flow
'use server';

/**
 * @fileOverview A flow to summarize Gmail emails based on user-defined filters.
 *
 * - summarizeGmail - A function that handles the email summarization process.
 * - SummarizeGmailInput - The input type for the summarizeGmail function.
 * - SummarizeGmailOutput - The return type for the summarizeGmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeGmailInputSchema = z.object({
  emailFilter: z.string().describe('The filter to apply to the Gmail inbox.'),
  numberOfEmails: z.number().describe('The number of emails to retrieve and summarize.'),
});
export type SummarizeGmailInput = z.infer<typeof SummarizeGmailInputSchema>;

const SummarizeGmailOutputSchema = z.object({
  summary: z.string().describe('The summary of the emails.'),
});
export type SummarizeGmailOutput = z.infer<typeof SummarizeGmailOutputSchema>;

export async function summarizeGmail(input: SummarizeGmailInput): Promise<SummarizeGmailOutput> {
  return summarizeGmailFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeGmailPrompt',
  input: {schema: SummarizeGmailInputSchema},
  output: {schema: SummarizeGmailOutputSchema},
  prompt: `You are an AI assistant helping to summarize a user's emails.
  The user will provide a filter to apply to their Gmail inbox and the number of emails to retrieve.
  You should summarize the emails based on the filter and the number of emails provided.

  Filter: {{{emailFilter}}}
  Number of Emails: {{{numberOfEmails}}}

  Summary:`,
});

const summarizeGmailFlow = ai.defineFlow(
  {
    name: 'summarizeGmailFlow',
    inputSchema: SummarizeGmailInputSchema,
    outputSchema: SummarizeGmailOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
