import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/20 px-6">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">Fe Activa</h1>
          <p className="text-xl text-muted-foreground">
            Tu camino de fe personalizado comienza aquí
          </p>
        </div>

        <Button
          onClick={() => navigate('/onboarding')}
          variant="onboarding"
          size="xl"
          className="min-w-64"
        >
          Comenzar
        </Button>

        <p className="text-sm text-muted-foreground pt-8">
          Únete a miles de personas que transforman su fe cada día
        </p>
      </div>
    </div>
  );
};

export default Index;
