<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';

// --- State Management ---
const activeSection = ref('sobre');

// --- Data Definitions ---
const icons = {
  Github: 'i-mdi-github',
  Linkedin: 'i-mdi-linkedin',
  Mail: 'i-mdi-email',
  Phone: 'i-mdi-phone',
  MapPin: 'i-mdi-map-marker',
  Building2: 'i-mdi-office-building',
  Calendar: 'i-mdi-calendar',
  Briefcase: 'i-mdi-briefcase'
};

const skills = {
  avancado: ['PHP', 'Laravel', 'Node.js', 'JavaScript', 'React', 'CSS', 'Tailwind', 'MySQL', 'Git', 'Docker'],
  intermediario: ['TypeScript', 'Vue', 'Java', 'Spring Boot', 'React Native', 'Supabase', 'Linux', 'UX/UI'],
  ferramentas: ['Docker', 'GCP', 'Git/GitHub', 'Firebase', 'APIs REST']
};

const experiences = [
  {
    title: 'Desenvolvedor Fullstack - Estagiário',
    company: 'Prefeitura Municipal de São Mateus',
    period: '04/2024 - Atual',
    icon: icons.Building2,
    responsibilities: [
      'Desenvolvimento e manutenção de soluções web escaláveis para transformação digital utilizando PHP, Laravel, JavaScript, React, MySQL e Docker',
      'Co-liderança no projeto do Sistema Integrado de Gestão Esportiva Municipal, sendo responsável por decisões de arquitetura e implementação de funcionalidades críticas',
      'Implementação do sistema de ordens de serviço da Secretaria de TI, reduzindo o uso de papel em 90% e alcançando 100% de rastreabilidade',
      'Documentação técnica e padronização de componentes, promovendo reuso de código'
    ]
  },
  {
    title: 'Desenvolvedor Fullstack - Freelancer',
    company: 'Sistema Benedo - Gerenciamento de Corretores',
    period: '05/2025 - 07/2025',
    icon: icons.Briefcase, 
    responsibilities: [
      'Desenvolvimento completo de plataforma para gestão de corretores e imobiliárias, desde modelagem de dados até infraestrutura',
      'Implementação de funcionalidades como controle de status, check-ins, monitoramento em tempo real e sorteios automáticos',
      'Transformação de processo manual em sistema 100% digital, seguro e auditável',
      'Backend com Laravel, frontend com Next.js e TypeScript, containerização com Docker e deploy em GCP'
    ]
  },
  {
    title: 'Desenvolvedor Fullstack',
    company: 'Adapti Soluções Web (Empresa Jr)',
    period: '12/2023 - 07/2025',
    icon: icons.Building2, 
    responsibilities: [
      'Desenvolvimento de aplicações web com Laravel e React/Next.js, incluindo criação de APIs RESTful',
      'Liderança de equipe no desenvolvimento e publicação do site Credfacil',
      'Manutenção de sistemas legados e propostas de melhorias em componentização e automação'
    ]
  }
];

const projects = [
  {
    title: 'Sistema de Ordens de Serviço - TI',
    description: 'Sistema completo para gestão de chamados de TI com dashboard, priorização de tarefas e redução de 90% no uso de papel. Inclui checklists e gráficos de desempenho.',
    techs: ['Laravel', 'MySQL', 'React']
  },
  {
    title: 'Sistema de Gestão Esportiva',
    description: 'Plataforma integrada para agendamento de espaços esportivos, gestão de atletas e comunicação com usuários. Co-liderança em arquitetura e desenvolvimento.',
    techs: ['Laravel', 'Node.js', 'Docker']
  },
  {
    title: 'Benedo - Gestão de Corretores',
    description: 'Sistema completo para gestão de corretores e imobiliárias com sorteios automáticos, check-ins e monitoramento em tempo real. Deploy em Google Cloud.',
    techs: ['Laravel', 'Next.js', 'TypeScript', 'GCP']
  }
];

// --- Methods ---
const scrollToSection = (sectionId) => {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

const navItems = computed(() => {
    return [
        // { id: 'sobre', label: 'sobre' },
        // { id: 'skills', label: 'skills' },
        { id: 'experiencia', label: 'Experiência' },
        { id: 'projetos', label: 'projetos' },
        // { id: 'contato', label: 'contato' },
    ];
});
</script>

<template>
  <div class="min-h-screen font-body bg-custom-background text-custom-text">
    
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <h1 class="text-2xl font-headline font-bold text-custom-primary">Felício Almeida.</h1>
          <ul class="flex gap-8">
            <li v-for="item in navItems" :key="item.id">
              <button
                @click="scrollToSection(item.id)"
                class="text-custom-text hover:text-custom-primary font-medium transition-colors capitalize"
              >
                {{ item.label === 'Experiência' ? 'Experiência' : item.label }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="pt-32 pb-20 px-4 center text-black">
      <div class="max-w-4xl mx-auto animate-fade-in flex flex-col justify-center w-full">
        <p class="mb-2">Sejam bem vindos, sou</p>
        <h2 class="mb-4 text-4xl sm:text-5xl font-headline font-bold text-black">Felício Almeida.</h2>
        <p class="text-xl mb-5 opacity-95 max-w-2xl text-black">
          Construo soluções eficientes e criativas para fazer pessoas mais felizes com tecnologia. Gosto muito de resolver problemas de diversos tipos, seja fazendo sistemas completos 
          ou trabalhando com infra. Minha stack principal é Vue e PHP mas me divirto em várias áreas incluindo devops.
        </p>
        <p class="text-xl mb-5">Tecnologias que trabalho:</p>
        
        <div class="flex flex-wrap justify-center gap-6 p-6 bg-gray-50 rounded-xl shadow-xl max-w-5xl mx-auto">
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:php" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">PHP</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <Icon icon="logos:laravel" class="text-3xl mb-1" />
            <p class="text-xs font-semibold text-gray-700">Laravel</p>
          </div>
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <Icon icon="logos:git-icon" class="text-3xl mb-1" />
            <p class="text-xs font-semibold text-gray-700">Git</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:typescript-icon" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">TypeScript</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:react" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">React</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:nuxt-icon" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">Nuxt</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:vue" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">Vue</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:css-3" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">CSS</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:tailwindcss-icon" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">Tailwind</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:mysql" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">MySQL</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:postgresql" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">Postgres</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:aws" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">AWS</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:docker-icon" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">Docker</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:linux-tux" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">Linux</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:kubernetes" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">Kubernetes</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:helm" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">Helm</p>
          </div>
          
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:google-cloud" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">GCP</p>
          </div>
    
          <div class="flex flex-col items-center p-3 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <Icon icon="logos:terraform-icon" class="text-3xl mb-1" />
              <p class="text-xs font-semibold text-gray-700">Terraform</p>
          </div>

      </div>

        <div class="flex gap-4 mb-8">
          <a href="#projetos" class="px-6 py-2 border border-custom-primary bg-custom-primary font-bold rounded-full hover:bg-custom-accent hover:text-custom-background transition-colors">
            Ver meu trabalho
          </a>
          <a href="/FelicioAlmeidaCV.pdf" target="_blank" class="px-6 py-2 border border-custom-primary text-white bg-black text-custom-primary font-bold rounded-full hover:bg-custom-secondary transition-colors">
            Baixar CV
          </a>
        </div>
        <div class="flex gap-4 justify-center">
          <a
            href="https://github.com/felicio-almd"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-custom-background text-custom-primary w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <UIcon :name="icons.Github" class="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/felicio-almeida/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-custom-background text-custom-primary w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <UIcon :name="icons.Linkedin" class="w-6 h-6" />
          </a>
          <a
            href="mailto:feliciorar@gmail.com"
            class="bg-custom-background text-custom-primary w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <UIcon :name="icons.Mail" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <!-- <section id="sobre" class="bg-white rounded-2xl shadow-2xl p-8 mb-8">
        <h3 class="text-3xl font-headline font-bold text-custom-primary mb-6 text-center">Sobre Mim</h3>
        <p class="text-lg leading-relaxed max-w-4xl mx-auto text-center">
          Desenvolvedor Fullstack com experiência no desenvolvimento de sistemas escaláveis utilizando PHP, Laravel e MySQL, 
          com foco em eficiência, automação de processos e organização de dados. Atuei em projetos reais com grande 
          impacto interno, como sistemas de ordens de serviço e agendamentos, com dashboards e funcionalidades para controle 
          operacional. Comprometido com boas práticas de desenvolvimento, experiência do cliente e melhoria contínua.
        </p>
      </section> -->

      <!-- <section id="skills" class="bg-white rounded-2xl shadow-2xl p-8 mb-8">
        <h3 class="text-3xl font-headline font-bold text-custom-primary mb-8 text-center">Habilidades Técnicas</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-custom-secondary/20 rounded-xl border-l-4 border-custom-primary">
            <h4 class="text-xl font-semibold text-custom-primary mb-4">Avançado</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in skills.avancado" :key="skill" class="bg-white px-4 py-2 rounded-full text-sm shadow-sm">
                {{ skill }}
              </span>
            </div>
          </div>
          <div class="p-6 bg-custom-secondary/20 rounded-xl border-l-4 border-custom-primary">
            <h4 class="text-xl font-semibold text-custom-primary mb-4">Intermediário</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in skills.intermediario" :key="skill" class="bg-white px-4 py-2 rounded-full text-sm shadow-sm">
                {{ skill }}
              </span>
            </div>
          </div>
          <div class="p-6 bg-custom-secondary/20 rounded-xl border-l-4 border-custom-primary">
            <h4 class="text-xl font-semibold text-custom-primary mb-4">Ferramentas & DevOps</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in skills.ferramentas" :key="skill" class="bg-white px-4 py-2 rounded-full text-sm shadow-sm">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section> -->

      <section id="experiencia" class="bg-white rounded-2xl shadow-2xl p-8 mb-8">
        <h3 class="text-3xl font-headline font-bold text-custom-primary mb-8 text-center">Experiência Profissional</h3>
        <div class="space-y-6">
          <div v-for="(exp, index) in experiences" :key="index" class="p-6 bg-custom-background rounded-xl border-l-4 border-custom-accent">
            <h4 class="text-xl font-semibold text-custom-accent mb-2">{{ exp.title }}</h4>
            <div class="text-custom-text mb-4 space-y-1">
              <div class="flex items-center gap-2">
                <UIcon :name="exp.icon" class="w-4 h-4 text-custom-accent" />
                <span>{{ exp.company }}</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon :name="icons.Calendar" class="w-4 h-4 text-custom-accent" />
                <span>{{ exp.period }}</span>
              </div>
            </div>
            <ul class="list-disc list-inside space-y-2 text-custom-text">
              <li v-for="(resp, idx) in exp.responsibilities" :key="idx" class="leading-relaxed">{{ resp }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projetos" class="bg-white rounded-2xl shadow-2xl p-8 mb-8">
        <h3 class="text-3xl font-headline font-bold text-custom-primary mb-8 text-center">Alguns Projetos</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="p-6 bg-custom-secondary/20 rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all border-t-2 border-custom-primary"
          >
            <h4 class="text-xl font-semibold text-custom-primary mb-3">{{ project.title }}</h4>
            <p class="text-custom-text mb-4 leading-relaxed">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.techs" :key="tech" class="bg-custom-primary text-custom-text px-3 py-1 rounded-full text-sm font-medium">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- <section id="contato" class="bg-white rounded-2xl shadow-2xl p-8">
        <h3 class="text-3xl font-headline font-bold text-custom-primary mb-8 text-center">Entre em Contato</h3>
        <div class="flex flex-wrap justify-center gap-8">
          <div class="flex items-center gap-4">
            <div class="bg-custom-accent text-custom-background w-12 h-12 rounded-full flex items-center justify-center">
              <UIcon :name="icons.Mail" class="w-6 h-6" />
            </div>
            <div>
              <strong class="block text-custom-text">Email</strong>
              <a href="mailto:feliciorar@gmail.com" class="text-custom-primary hover:underline font-medium">
                feliciorar@gmail.com
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="bg-custom-accent text-custom-background w-12 h-12 rounded-full flex items-center justify-center">
              <UIcon :name="icons.Phone" class="w-6 h-6" />
            </div>
            <div>
              <strong class="block text-custom-text">Telefone</strong>
              <span class="text-custom-text">+55 33 99934-4257</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="bg-custom-accent text-custom-background w-12 h-12 rounded-full flex items-center justify-center">
              <UIcon :name="icons.MapPin" class="w-6 h-6" />
            </div>
            <div>
              <strong class="block text-custom-text">Localização</strong>
              <span class="text-custom-text">São Mateus, ES - Brasil</span>
            </div>
          </div>
        </div>
      </section> -->
    </div>

    <footer class="bg-white/95 py-8 text-center text-custom-text">
      <p>&copy; 2025 Felício Almeida. Software Developer & DevOps | UFES</p>
    </footer>
  </div>
</template>