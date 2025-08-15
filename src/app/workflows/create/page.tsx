export default function CreateWorkflowPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Workflow</h1>
        <p className="text-muted-foreground">
          Build a new automation by chaining triggers and actions.
        </p>
      </div>
      {/* The multi-step wizard will be implemented here */}
      <div className="flex h-96 items-center justify-center rounded-lg border-2 border-dashed">
        <p className="text-muted-foreground">Workflow creation wizard coming soon!</p>
      </div>
    </div>
  );
}
