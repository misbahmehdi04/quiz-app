import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supUrl = 'https://qpfmuqdhsoyhremaxjik.supabase.co'
const supKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwZm11cWRoc295aHJlbWF4amlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0Mzc1MDMsImV4cCI6MjA4MDAxMzUwM30.OcHj8FDHUuAwzOkPxWIqCmbmonjZl7TblRryylrKXP0'

const supabase = createClient(supUrl, supKey)

export default supabase
