import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { programs } from '@/data/mockData';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const ProgramPage = () => {
  return (
    <>
      <PageHeader
        title="Program Pendidikan"
        subtitle="Lima program unggulan yang dirancang untuk membentuk generasi berilmu dan berakhlak mulia."
        breadcrumbs={[{ label: 'Program' }]}
      />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {programs.map((program, i) => (
            <motion.div key={program.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link to={`/program/${program.slug}`} className="block group h-full">
                <div className="glass-card p-6 md:p-8 h-full hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                      <BookOpen className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 text-xs font-medium rounded bg-primary/10 text-primary">{program.level}</span>
                        <span className="text-xs text-muted-foreground">{program.duration}</span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">{program.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{program.description}</p>
                      <ul className="space-y-1.5">
                        {program.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary mt-4">
                        Detail Program <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default ProgramPage;
