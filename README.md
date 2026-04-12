# Helio Premium Portfolio

Premium personal portfolio website for Helio, built with React + Tailwind CSS.

## Stack

- React (Vite)
- Tailwind CSS
- Mobile-first responsive UI

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start dev server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

## Contact form + Supabase email

1. Frontend environment variables (`.env`):

   ```bash
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. Create DB table in Supabase SQL Editor:

   - Run `supabase/cadastro.sql`

3. Configure Edge Function secrets:

   ```bash
   supabase secrets set RESEND_API_KEY=your_resend_api_key
   supabase secrets set CONTACT_TO_EMAIL=heliocwoi@gmail.com
   supabase secrets set CONTACT_FROM_EMAIL="Portfolio <onboarding@resend.dev>"
   ```

4. Deploy function:

   ```bash
   supabase functions deploy send-contact-email
   ```

## Included sections

- Hero
- About
- Skills
- Services
- Featured Projects
- Value Proposition
- Testimonials
- Tools & Platforms
- Contact
- Footer
