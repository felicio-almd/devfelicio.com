<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';

const activeSection = ref('sobre');

const experiences = [
  {
    title: 'Desenvolvedor Fullstack',
    company: 'Prefeitura Municipal de São Mateus',
    period: '04/2024 - Atual',
    responsibilities: [
      'Trabalhando transformação digital do setor público de São Mateus, o uso de papel em 90% usando soluções e alcançando 100% de rastreabilidade',
      'Co-liderança em projetos de Sistemas, responsável por decisões de arquitetura e implementação de funcionalidades críticas',
    ]
  },
  {
    title: 'Desenvolvedor Fullstack - Freelancer',
    company: 'Sistema Benedo - Gerenciamento de Corretores',
    period: '05/2025 - 07/2025',
    responsibilities: [
      'Desenvolvimento completo de plataforma para gestão de corretores e imobiliárias, desde modelagem de dados até infraestrutura',
      'Implementação de funcionalidades como controle de status, check-ins, monitoramento em tempo real e sorteios automáticos. ',
      'Transformação de processo manual em sistema 100% digital, seguro e auditável',
    ]
  },
  {
    title: 'Desenvolvedor Fullstack - Gerente',
    company: 'Adapti Soluções Web (Empresa Jr)',
    period: '12/2023 - 07/2025',
    responsibilities: [
      'Desenvolvimento de aplicações web com Laravel e React/Next.js',
      'Liderança de equipe no desenvolvimento, manutenção de sistemas legados e propostas de melhorias em componentização e automação'
    ]
  }
];

const projects = [
  {
    title: 'Sistema de Ordens de Serviço - TI',
    description: 'Sistema completo para gestão de chamados de TI com dashboard, priorização de tarefas e redução de 90% no uso de papel. Inclui checklists e gráficos de desempenho.',
    techs: ['PHP', 'Laravel', 'MySQL']
  },
  {
    title: 'Sistema de Gestão Esportiva',
    description: 'Plataforma integrada para agendamento de espaços esportivos, gestão de atletas e comunicação com usuários. Co-liderança em arquitetura e desenvolvimento.',
    techs: ['PHP', 'Laravel', 'Typescript', 'React']
  },
  {
    title: 'Benedo - Gestão de Corretores',
    description: 'Sistema completo para gestão de corretores e imobiliárias com sorteios automáticos, check-ins e monitoramento em tempo real. Deploy em Google Cloud.',
    techs: ['PHP', 'Laravel', 'Next.js', 'TypeScript', 'GCP']
  }
];

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
        { id: 'experiencia', label: 'Experiência' },
        { id: 'projetos', label: 'projetos' },
    ];
});
</script>

<template>
  <div class="min-h-screen font-body bg-custom-background text-custom-text">
    
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <h1 class="text-2xl font-headline font-bold text-custom-primary">Felício</h1>
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

    <div class="pt-28 pb-14 px-4 center text-black">
      <div class="max-w-4xl mx-auto animate-fade-in flex flex-col gap-4 justify-center w-full items-center">
        <p class="mb-2">Sejam bem vindos, sou</p>
        <h2 class="mb-4 text-4xl sm:text-5xl font-headline font-bold text-black">Felício Almeida.</h2>
        <p class="text-xl mb-5 opacity-95 max-w-2xl text-black text-justify">
          Construo soluções eficientes e criativas para fazer pessoas mais felizes com tecnologia. Gosto muito de resolver problemas de diversos tipos, seja fazendo sistemas completos 
          ou trabalhando com infra. Minha stack principal é Vue e PHP mas me divirto em várias áreas incluindo devops.
        </p>
        <p class="text-xl mb-5">Tecnologias que trabalho:</p>
        
        <div class="flex flex-wrap justify-center gap-6 p-6 bg-gray-50 rounded-xl shadow-xl max-w-5xl mx-auto mb-4">
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
            class="bg-custom-background text-custom-primary w-12 h-12 rounded-full flex items-center justify-center shadow hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <Icon icon="mdi:briefcase" class="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/felicio-almeida/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-custom-background text-custom-primary w-12 h-12 rounded-full flex items-center justify-center shadow hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <Icon icon="mdi:github" class="text-2xl" />
          </a>
          <a
            href="mailto:feliciorar@gmail.com"
            class="bg-custom-background text-custom-primary w-12 h-12 rounded-full flex items-center justify-center shadow hover:-translate-y-1 hover:shadow-xl transition-all"
          >
             <Icon icon="mdi:email-outline" class="text-2xl" />
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

      <section id="experiencia" class="bg-white rounded-2xl shadow-2xl p-8 mb-8">
        <h3 class="text-3xl font-headline font-bold text-custom-primary mb-8 text-center">Experiência Profissional</h3>
        <div class="space-y-6">
          <div v-for="(exp, index) in experiences" :key="index" class="p-6 bg-custom-background rounded-xl border-l-4 border-custom-accent">
            <h4 class="text-xl font-semibold text-custom-accent mb-2">{{ exp.title }}</h4>
            <div class="text-custom-text mb-4 space-y-1">
              <div class="flex items-center gap-2">
                <span>{{ exp.company }}</span>
              </div>
              <div class="flex items-center gap-2">
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

    </div>

    <footer class="bg-white/95 py-8 text-center text-custom-text">
      <p>&copy; 2025 Felício Almeida. Software Developer & DevOps | UFES</p>
    </footer>
  </div>
</template>