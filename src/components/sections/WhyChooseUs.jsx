import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { whyChooseUs } from '../../data/content';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';

export default function WhyChooseUs() {
  return (
    <section className="section bg-soft-gradient">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted by clinicians,"
          highlight="loved by patients"
          description="Our commitment to quality, compliance and customer care sets us apart in a healthcare landscape that demands consistency."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              className="card card-hover group p-7 flex gap-5"
            >
              <div className="flex-none">
                <div className="icon-tile h-12 w-12 group-hover:scale-110 transition-transform">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-ink-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
