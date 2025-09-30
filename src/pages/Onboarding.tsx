import { useOnboardingData } from '@/hooks/useOnboardingData';
import { OnboardingLayout } from '@/components/onboarding/OnboardingLayout';
import { S1Welcome } from '@/components/onboarding/screens/S1Welcome';
import { S2Purpose } from '@/components/onboarding/screens/S2Purpose';
import { S3Features } from '@/components/onboarding/screens/S3Features';
import { S4Auth } from '@/components/onboarding/screens/S4Auth';
import { ValueScreen } from '@/components/onboarding/screens/ValueScreen';
import { S9SocialProof } from '@/components/onboarding/screens/S9SocialProof';
import { QuizScreen, QuizOption } from '@/components/onboarding/screens/QuizScreen';
import { S21TargetedSocial } from '@/components/onboarding/screens/S21TargetedSocial';
import { S22Timeline } from '@/components/onboarding/screens/S22Timeline';
import { S23Paywall } from '@/components/onboarding/screens/S23Paywall';
import { BookOpen, MessageCircle, Calendar, ListChecks } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'sonner';

const Onboarding = () => {
  const { data, updateData, currentStep, nextStep } = useOnboardingData();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const handleQuizNext = (key: string, value: any) => {
    updateData({ [key]: value });
    nextStep();
  };

  const handleComplete = () => {
    toast.success('¡Bienvenido a Fe Activa!');
    navigate('/');
  };

  const motivationOptions: QuizOption[] = [
    { value: 'relacion', label: 'Fortalecer relación con Dios' },
    { value: 'paz', label: 'Paz/esperanza' },
    { value: 'familia', label: 'Guiar a mi familia' },
    { value: 'tentaciones', label: 'Superar tentaciones' },
    { value: 'aprender', label: 'Aprender más Biblia' },
  ];

  const primaryNeedOptions: QuizOption[] = [
    { value: 'familia', label: 'Familia/relaciones' },
    { value: 'maternidad', label: 'Maternidad/paternidad' },
    { value: 'ansiedad', label: 'Ansiedad/estrés' },
    { value: 'tentaciones', label: 'Tentaciones' },
    { value: 'constancia', label: 'Constancia' },
    { value: 'dudas', label: 'Dudas de fe' },
  ];

  const consistencyOptions: QuizOption[] = [
    { value: 'high', label: 'Casi a diario' },
    { value: 'mid', label: 'Algunas veces/semana' },
    { value: 'low', label: 'Rara vez' },
  ];

  const comprehensionOptions: QuizOption[] = [
    { value: 'high', label: 'Sí, casi siempre' },
    { value: 'mid', label: 'A veces me cuesta' },
    { value: 'low', label: 'A menudo me pierdo' },
  ];

  const formatOptions: QuizOption[] = [
    { value: 'audio', label: 'Audio' },
    { value: 'lectura', label: 'Lectura guiada' },
    { value: 'explicaciones', label: 'Explicaciones al toque' },
    { value: 'plan', label: 'Plan paso a paso' },
    { value: 'oracion', label: 'Oración guiada' },
  ];

  const minutesOptions: QuizOption[] = [
    { value: '5', label: '5 minutos' },
    { value: '10', label: '10 minutos' },
    { value: '15', label: '15 minutos' },
    { value: '20', label: '20+ minutos' },
  ];

  const daypartOptions: QuizOption[] = [
    { value: 'mañana', label: 'Mañana' },
    { value: 'mediodía', label: 'Mediodía' },
    { value: 'tarde', label: 'Tarde' },
    { value: 'noche', label: 'Noche' },
  ];

  const topicsOptions: QuizOption[] = [
    { value: 'familia', label: 'Familia' },
    { value: 'maternidad', label: 'Maternidad/paternidad' },
    { value: 'ansiedad', label: 'Ansiedad' },
    { value: 'tentaciones', label: 'Tentaciones' },
    { value: 'finanzas', label: 'Finanzas/avaricia' },
    { value: 'caracter', label: 'Carácter/paciencia' },
    { value: 'conocimiento', label: 'Conocimiento bíblico' },
  ];

  const chatOptions: QuizOption[] = [
    { value: '1to1', label: '1:1' },
    { value: 'group', label: 'Grupo pequeño' },
    { value: 'solo', label: 'Solo recursos, sin chatear por ahora' },
  ];

  const barriersOptions: QuizOption[] = [
    { value: 'tiempo', label: 'Falta de tiempo' },
    { value: 'comprension', label: 'No entendía los textos' },
    { value: 'soledad', label: 'Me sentía solo/a' },
    { value: 'olvido', label: 'Me olvidaba' },
    { value: 'progreso', label: 'No veía progreso' },
  ];

  const commitOptions: QuizOption[] = [
    { value: 'yes', label: 'Sí, acepto' },
    { value: 'maybe', label: 'Lo intentaré' },
    { value: 'no', label: 'Prefiero no comprometerme aún' },
  ];

  const renderScreen = () => {
    switch (currentStep) {
      case 1: return <S1Welcome onNext={nextStep} />;
      case 2: return <S2Purpose onNext={nextStep} />;
      case 3: return <S3Features onNext={nextStep} />;
      case 4: return <S4Auth onNext={nextStep} onUpdateData={updateData} />;
      
      case 5: return (
        <ValueScreen
          icon={BookOpen}
          title="Entiende cada versículo"
          description="Pulsa en cualquier frase y recibe explicaciones claras. Usa modo audio cuando no puedas leer."
          ctaText="Suena bien"
          featureName="bible"
          onNext={nextStep}
        />
      );
      
      case 6: return (
        <ValueScreen
          icon={MessageCircle}
          title="No caminas solo"
          description="Comparte tus dudas y preocupaciones. Recibe apoyo y oración en comunidad."
          ctaText="Lo necesito"
          featureName="chat"
          onNext={nextStep}
        />
      );
      
      case 7: return (
        <ValueScreen
          icon={Calendar}
          title="Inspírate cada mañana"
          description="Recibe un versículo como widget y fondo de pantalla."
          ctaText="Quiero activarlos"
          featureName="verses"
          onNext={nextStep}
        />
      );
      
      case 8: return (
        <ValueScreen
          icon={ListChecks}
          title="Un plan claro para tu vida"
          description="Elige tu área (familia, maternidad, ansiedad, tentaciones…) y sigue un plan diario/semanal."
          ctaText="Crear mi plan"
          featureName="plans"
          onNext={nextStep}
        />
      );
      
      case 9: return <S9SocialProof onNext={nextStep} />;
      
      case 10: return (
        <QuizScreen
          questionId="motivation"
          title="¿Qué te trae hoy aquí?"
          options={motivationOptions}
          multiSelect
          onNext={(value) => handleQuizNext('motivation', value)}
        />
      );
      
      case 11: return (
        <QuizScreen
          questionId="primary_need"
          title="¿Dónde sientes más necesidad ahora mismo?"
          options={primaryNeedOptions}
          onNext={(value) => handleQuizNext('primary_need', value)}
        />
      );
      
      case 12: return (
        <QuizScreen
          questionId="baseline_consistency"
          title="Hoy, ¿cuán constante eres?"
          options={consistencyOptions}
          onNext={(value) => handleQuizNext('baseline_consistency', value)}
        />
      );
      
      case 13: return (
        <QuizScreen
          questionId="comprehension"
          title="Cuando lees la Biblia, ¿la entiendes con claridad?"
          options={comprehensionOptions}
          onNext={(value) => handleQuizNext('comprehension', value)}
        />
      );
      
      case 14: return (
        <QuizScreen
          questionId="format_pref"
          title="¿Cómo prefieres aprender?"
          options={formatOptions}
          multiSelect
          onNext={(value) => handleQuizNext('format_pref', value)}
        />
      );
      
      case 15: return (
        <QuizScreen
          questionId="daily_minutes"
          title="¿Cuánto tiempo al día puedes dedicar?"
          options={minutesOptions}
          onNext={(value) => handleQuizNext('daily_minutes', parseInt(value))}
        />
      );
      
      case 16: return (
        <QuizScreen
          questionId="daypart"
          title="¿Cuándo te viene mejor?"
          options={daypartOptions}
          onNext={(value) => handleQuizNext('daypart', value)}
        />
      );
      
      case 17: return (
        <QuizScreen
          questionId="topics"
          title="Elige tus 2 prioridades"
          subtitle="Máximo 2"
          options={topicsOptions}
          multiSelect
          maxSelections={2}
          onNext={(value) => handleQuizNext('topics', value)}
        />
      );
      
      case 18: return (
        <QuizScreen
          questionId="chat_pref"
          title="Sobre el chat, ¿qué prefieres?"
          options={chatOptions}
          onNext={(value) => handleQuizNext('chat_pref', value)}
        />
      );
      
      case 19: return (
        <QuizScreen
          questionId="past_barriers"
          title="¿Qué te ha frenado antes?"
          options={barriersOptions}
          multiSelect
          onNext={(value) => handleQuizNext('past_barriers', value)}
        />
      );
      
      case 20: return (
        <QuizScreen
          questionId="soft_commit"
          title={`¿Te comprometes a ${data.daily_minutes || 10} min/día durante 1 semana?`}
          options={commitOptions}
          onNext={(value) => {
            handleQuizNext('soft_commit', value);
            const topicLabel = data.primary_need || data.topics?.[0] || 'fe';
            toast.success(
              `¡Genial! Estamos preparando tu plan '${topicLabel}' de ${data.daily_minutes || 10} min/día para ${data.daypart || 'mañana'}.`,
              { duration: 3000 }
            );
          }}
        />
      );
      
      case 21: return (
        <S21TargetedSocial
          onNext={nextStep}
          primaryNeed={data.primary_need}
        />
      );
      
      case 22: return (
        <S22Timeline
          onNext={nextStep}
          dailyMinutes={data.daily_minutes}
          topicPrincipal={data.primary_need || data.topics?.[0]}
        />
      );
      
      case 23: return (
        <S23Paywall
          onComplete={handleComplete}
          data={data}
        />
      );
      
      default: return <S1Welcome onNext={nextStep} />;
    }
  };

  return (
    <OnboardingLayout currentStep={currentStep}>
      {renderScreen()}
    </OnboardingLayout>
  );
};

export default Onboarding;
