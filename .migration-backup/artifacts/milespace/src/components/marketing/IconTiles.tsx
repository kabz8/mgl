import { motion } from "framer-motion";

interface IconTileItem {
  icon: string;
  title: string;
  subtitle: string;
}

export function IconTiles({ items }: { items: IconTileItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-border bg-card p-5 shadow-sm"
        >
          <p className="text-xl mb-3">{item.icon}</p>
          <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
        </motion.div>
      ))}
    </div>
  );
}
