import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-20 text-center lg:px-8">
      <div className="max-w-xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-secondary-foreground">
          Error 404
        </p>
        <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mb-8 text-muted-foreground">
          The page may have moved or the address may be incorrect.
        </p>
        <Button asChild>
          <Link to="/">Return home</Link>
        </Button>
      </div>
    </section>
  );
}
