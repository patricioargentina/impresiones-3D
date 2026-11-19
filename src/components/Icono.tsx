import {
  Archive, Bird, Box, Clock, Coffee, Cookie, Droplets, Flame, Flower, Flower2, Gem, Gift, Headphones,
  Home, Key, KeyRound, Lamp, LampDesk, Lightbulb, Moon, Mountain, PawPrint, Shapes, Sprout, Tag, Waves,
  type LucideIcon,
} from "lucide-react";

const ICONOS: Record<string, LucideIcon> = {
  Archive, Bird, Box, Clock, Coffee, Cookie, Droplets, Flame, Flower, Flower2, Gem, Gift, Headphones,
  Home, Key, KeyRound, Lamp, LampDesk, Lightbulb, Moon, Mountain, PawPrint, Shapes, Sprout, Tag, Waves,
};

export function Icono({ nombre, className, strokeWidth = 1.6 }: { nombre: string; className?: string; strokeWidth?: number }) {
  const I = ICONOS[nombre] ?? Box;
  return <I className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
