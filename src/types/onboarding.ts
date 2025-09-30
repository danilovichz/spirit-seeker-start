export interface OnboardingData {
  daily_minutes?: 5 | 10 | 15 | 20;
  daypart?: 'mañana' | 'mediodía' | 'tarde' | 'noche';
  motivation?: string[];
  primary_need?: string;
  topics?: string[];
  format_pref?: string[];
  chat_pref?: '1to1' | 'group' | 'solo';
  baseline_consistency?: 'high' | 'mid' | 'low';
  comprehension?: 'high' | 'mid' | 'low';
  past_barriers?: string[];
  soft_commit?: 'yes' | 'maybe' | 'no';
  name?: string;
  authenticated?: boolean;
}

export const TOTAL_SCREENS = 23;

export const topicResults: Record<string, string> = {
  'ansiedad': 'paz',
  'familia': 'armonía',
  'tentaciones': 'dominio propio',
  'constancia': 'disciplina',
  'conocimiento': 'claridad',
  'maternidad': 'sabiduría',
  'paternidad': 'sabiduría',
  'relaciones': 'amor',
  'dudas': 'certeza',
  'estrés': 'descanso',
};

export const formatLabels: Record<string, string> = {
  'audio': 'Audio',
  'lectura': 'Lectura guiada',
  'explicaciones': 'Explicaciones al toque',
  'plan': 'Plan paso a paso',
  'oracion': 'Oración guiada',
};

export const chatLabels: Record<string, string> = {
  '1to1': '1:1',
  'group': 'grupo pequeño',
  'solo': 'cuando lo necesites',
};
