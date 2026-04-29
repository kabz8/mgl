interface IconTileItem {
  icon: string;
  title: string;
  subtitle: string;
}

export function IconTiles({ items }: { items: IconTileItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xl mb-3">{item.icon}</p>
          <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
