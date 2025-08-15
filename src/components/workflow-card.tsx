"use client";

import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Settings, Trash2 } from 'lucide-react';

export interface Workflow {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  active: boolean;
  tags: string[];
}

interface WorkflowCardProps {
  workflow: Workflow;
  onToggle: (id: string) => void;
  className?: string;
}

export function WorkflowCard({ workflow, onToggle, className }: WorkflowCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col transition-all hover:shadow-lg hover:-translate-y-1",
        !workflow.active && "bg-muted/50",
        className
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={cn("p-2 rounded-lg", workflow.active ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>
              <workflow.icon className="h-6 w-6" />
            </div>
            <CardTitle className="text-lg font-semibold">{workflow.title}</CardTitle>
          </div>
          <Switch
            checked={workflow.active}
            onCheckedChange={() => onToggle(workflow.id)}
            aria-label={`Activate workflow: ${workflow.title}`}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{workflow.description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {workflow.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
