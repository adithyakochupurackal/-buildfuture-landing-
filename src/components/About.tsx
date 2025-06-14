import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Expert Team Members' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Construction team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-500 rounded-lg" />
            </div>

            {/* Content Section */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Building Excellence Since{' '}
                <span className="text-blue-500">2003</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                We are a premier construction company dedicated to delivering exceptional quality and innovation in every project. With over two decades of experience, we've built our reputation on trust, expertise, and a commitment to excellence.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                Our team of skilled professionals combines traditional craftsmanship with cutting-edge technology to create structures that stand the test of time while meeting modern demands.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 bg-gray-800 rounded-lg"
                  >
                    <div className="text-3xl font-bold text-blue-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 