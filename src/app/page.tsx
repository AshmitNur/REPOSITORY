"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WorkflowCard, type Workflow } from '@/components/workflow-card';
import { PlusCircle, Mail, MapPin, Clock } from 'lucide-react';

const initialWorkflows: Workflow[] = [
  {
    id: '1',
    title: "Summarize 'Call for Papers' Emails",
    description: 'Weekly summary of unread emails with the "call for papers" label, sent to Telegram.',
    icon: Mail,
    active: true,
    tags: ['gmail', 'summary', 'telegram'],
  },
  {
    id: '2',
    title: 'Notify Partner on Arriving Home',
    description: "Sends 'I'm almost home!' to your partner when you enter the 'Home' geofence.",
    icon: MapPin,
    active: true,
    tags: ['geofence', 'telegram'],
  },
  {
    id: '3',
    title: 'Weekly Project Summary',
    description: 'Generates a summary of all project-related emails from the past week and emails it to the team.',
    icon: Clock,
    active: false,
    tags: ['scheduled', 'gmail', 'summary', 'email'],
  },
  {
    id: '4',
    title: 'New Lead Alert',
    description: 'When a new email is labeled "Lead", summarize it and send a high-priority notification.',
    icon: Mail,
    active: true,
    tags: ['gmail', 'summary', 'notification'],
  },
];

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>(initialWorkflows);

  const toggleWorkflow = (id: string) => {
    setWorkflows(
      workflows.map((wf) => (wf.id === id ? { ...wf, active: !wf.active } : wf))
    );
  };

  const activeWorkflows = workflows.filter((wf) => wf.active);
  const inactiveWorkflows = workflows.filter((wf) => !wf.active);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workflows</h1>
          <p className="text-muted-foreground">
            Automate your life. Here are your active and inactive workflows.
          </p>
        </div>
        <Link href="/workflows/create">
          <Button>
            <PlusCircle className="mr-2" />
            Create Workflow
          </Button>
        </Link>
      </div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All ({workflows.length})</TabsTrigger>
          <TabsTrigger value="active">Active ({activeWorkflows.length})</TabsTrigger>
          <TabsTrigger value="inactive">Inactive ({inactiveWorkflows.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {workflows.map((workflow) => (
              <WorkflowCard key={workflow.id} workflow={workflow} onToggle={toggleWorkflow} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {activeWorkflows.map((workflow) => (
              <WorkflowCard key={workflow.id} workflow={workflow} onToggle={toggleWorkflow} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="inactive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {inactiveWorkflows.map((workflow) => (
              <WorkflowCard key={workflow.id} workflow={workflow} onToggle={toggleWorkflow} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
