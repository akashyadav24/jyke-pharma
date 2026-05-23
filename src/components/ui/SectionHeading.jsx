import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  highlight,
}) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={`max-w-3xl ${alignCls}`}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="heading-lg">
        {title}{' '}
        {highlight && <span className="grad-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="lede mt-5">{description}</p>
      )}
    </motion.div>
  );
}
