import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-8">
        <ThemeToggle />
        <h1 className="mt-8 text-4xl font-bold">Welcome to Doris</h1>
        <p className="mt-4 text-muted-foreground">
          Your Personal AI Agent as Developer Employee
        </p>
      </div>
    </div>
  );
}
