import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Server, Lock, Cpu, Database, ShieldCheck, AlertTriangle, TrendingUp, Rocket, Zap, Sparkles, ArrowRight, Award, Target, ChartBar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);
  return <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>;
};

const WhyWrlds = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="why-wrlds" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Pourquoi WRLDS ?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto">
            Dans une industrie où la complexité mène à l'échec, nous apportons simplicité et expertise pour assurer votre succès
          </motion.p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={4.88} decimals={2} prefix="$" suffix=" Millions" />
            </h3>
            <p className="text-gray-700">Coût moyen d'une violation de données en 2024, montrant l'importance critique de la cybersécurité</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={72} suffix="%" /> 
            </h3>
            <p className="text-gray-700">
              des entreprises ont subi au moins une cyberattaque en 2023, nécessitant des infrastructures sécurisées
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={15} suffix="%" />
            </h3>
            <p className="text-gray-700">
              Croissance annuelle du marché des serveurs et infrastructures sécurisées, un secteur en pleine expansion
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Ce que WRLDS fait pour vous
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous transformons vos idées en solutions prêtes pour le marché avec des avantages tangibles pour votre entreprise
            </p>
          </motion.div>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-red-200 rounded-full p-3 mr-4">
                  <ShieldCheck className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Sécurité Renforcée</h4>
                  <p className="text-gray-700">Protégez vos infrastructures avec des solutions de cybersécurité avancées et des matériels sécurisés.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full p-3 mr-4">
                  <Server className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Infrastructure Haute Performance</h4>
                  <p className="text-gray-700">Déployez des serveurs et équipements réseau optimisés pour vos besoins critiques.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-green-200 rounded-full p-3 mr-4">
                  <Cpu className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Matériel de Pointe</h4>
                  <p className="text-gray-700">Intégrez les dernières technologies processeur et composants pour une performance maximale.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-purple-200 rounded-full p-3 mr-4">
                  <Database className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Gestion de Données Sécurisée</h4>
                  <p className="text-gray-700">Stockez et gérez vos données sensibles avec des solutions de chiffrement et de sauvegarde avancées.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-10">
            <Link 
              to="/development-process" 
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group"
            >
              En savoir plus sur notre processus de développement structuré
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};

export default WhyWrlds;
