import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer, Building2, Phone, Mail, ArrowRight, ShieldCheck, Users, Printer } from 'lucide-react';
import logo from './assets/logo.jpg';

const OganeIndustryWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const NavLink = ({ page, label }) => (
    <button
      onClick={() => navigateTo(page)}
      className={`text-sm font-bold tracking-wider hover:text-yellow-400 transition-colors uppercase ${
        currentPage === page ? 'text-yellow-400' : 'text-gray-300'
      }`}
    >
      {label}
    </button>
  );

  const MobileNavLink = ({ page, label }) => (
    <button
      onClick={() => navigateTo(page)}
      className={`block w-full text-left py-4 px-6 border-b border-gray-800 text-lg font-bold tracking-wider ${
        currentPage === page ? 'text-yellow-400 bg-gray-900' : 'text-white'
      }`}
    >
      {label}
    </button>
  );

  // --- Components ---

  const Hero = () => (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image: Young Staff / Next Generation theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1581094794329-cd119277f378?q=80&w=2070&auto=format&fit=crop" 
          alt="Next Generation Construction Staff" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center md:text-left">
        <div className="md:w-2/3">
          <p className="text-yellow-400 font-bold tracking-[0.2em] mb-4 text-sm md:text-base animate-fade-in-up">
            OGANE INDUSTRY RECRUITMENT
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100">
            日本の建設の<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">足場</span>となれる<br />
            会社を目指して。
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl animate-fade-in-up delay-200">
            次世代を担うスタッフが活躍中。<br/>
            大鐘工業は、安全と信頼を築く、誇り高き仕事を共に創る仲間を求めています。
          </p>
          <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300">
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-yellow-500 text-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
            >
              今すぐ応募する <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => navigateTo('service')}
              className="border border-gray-600 text-white px-8 py-4 font-bold text-lg hover:bg-white/10 transition-colors"
            >
              事業内容を見る
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Services = () => (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">OUR SERVICES</h2>
          <p className="text-yellow-500 font-bold tracking-widest">事業内容</p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-900 p-8 md:p-12 border border-gray-800 hover:border-yellow-500/50 transition-colors group">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
              <Building2 className="text-yellow-500 group-hover:text-black w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">足場仮設工事</h3>
            <p className="text-gray-400 leading-relaxed">
              くさび式足場、枠組足場など、現場の状況に合わせた最適な足場を提供します。
              安全性と作業効率を最大化する設計・施工を行います。
            </p>
          </div>

          <div className="bg-gray-900 p-8 md:p-12 border border-gray-800 hover:border-yellow-500/50 transition-colors group">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
              <ShieldCheck className="text-yellow-500 group-hover:text-black w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">安全管理・点検</h3>
            <p className="text-gray-400 leading-relaxed">
              設置後の定期点検、台風や地震後の臨時点検など、徹底した安全管理体制を敷いています。
              作業員の命を守る「足場」の品質に妥協はありません。
            </p>
          </div>

          <div className="bg-gray-900 p-8 md:p-12 border border-gray-800 hover:border-yellow-500/50 transition-colors group">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
              <Hammer className="text-yellow-500 group-hover:text-black w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">鉄骨建方工事</h3>
            <p className="text-gray-400 leading-relaxed">
              大型建築物の骨組みとなる鉄骨の組立工事。
              高所での精密な作業技術を持つ職人が、建物の「骨格」を作り上げます。
            </p>
          </div>

          <div className="bg-gray-900 p-8 md:p-12 border border-gray-800 hover:border-yellow-500/50 transition-colors group">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
              <Users className="text-yellow-500 group-hover:text-black w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">人材育成</h3>
            <p className="text-gray-400 leading-relaxed">
              未経験からの技術習得をサポート。資格取得支援制度やOJTを通じて、
              一生モノの技術を持つ職人を育てています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const About = () => (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">COMPANY</h2>
          <p className="text-yellow-500 font-bold tracking-widest">会社概要</p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold border-l-4 border-yellow-500 pl-4">代表挨拶</h3>
            <p className="text-gray-300 leading-relaxed">
              建設現場において、足場は全ての作業の土台です。私たちがしっかりとした足場を作ることで、その後に続く職人さんたちが安心して最高の仕事ができる。
              <br /><br />
              大鐘工業は、「信頼」と「技術」を第一に、日本の建設を支える裏方としての誇りを持っています。
              若い力が活躍できる環境を整え、共に成長できる仲間を待っています。
            </p>
            <div className="text-right">
              <p className="text-lg font-bold">代表取締役 大鐘 悠太郎</p>
            </div>
          </div>
          <div className="h-64 md:h-full bg-gray-800 rounded-lg overflow-hidden relative">
             <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
              alt="Construction Site" 
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h3 className="text-xl font-bold mb-6 text-yellow-500">会社情報</h3>
          <dl className="space-y-4">
            <div className="flex flex-col md:flex-row border-b border-gray-800 pb-4">
              <dt className="w-32 font-bold text-gray-400">会社名</dt>
              <dd className="flex-1">大鐘工業株式会社</dd>
            </div>
            <div className="flex flex-col md:flex-row border-b border-gray-800 pb-4">
              <dt className="w-32 font-bold text-gray-400">建設業許可</dt>
              <dd className="flex-1">千葉県知事許可(般ー７)第５８２７２号</dd>
            </div>
            <div className="flex flex-col md:flex-row border-b border-gray-800 pb-4">
              <dt className="w-32 font-bold text-gray-400">設立</dt>
              <dd className="flex-1">2025年 8月</dd>
            </div>
            <div className="flex flex-col md:flex-row border-b border-gray-800 pb-4">
              <dt className="w-32 font-bold text-gray-400">所在地</dt>
              <dd className="flex-1">
                〒290-0243<br/>
                千葉県市原市上高根1242
              </dd>
            </div>
            <div className="flex flex-col md:flex-row border-b border-gray-800 pb-4">
              <dt className="w-32 font-bold text-gray-400">連絡先</dt>
              <dd className="flex-1">
                TEL: 0436-95-2063<br/>
                FAX: 0436-98-2799<br/>
                Email: ogane.kogyo01@gmail.com
              </dd>
            </div>
            <div className="flex flex-col md:flex-row border-b border-gray-800 pb-4">
              <dt className="w-32 font-bold text-gray-400">事業内容</dt>
              <dd className="flex-1">とび・土工工事業、鋼構造物工事業</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );

  const Contact = () => {
    // 送信でメールソフトを起動（mailto）
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.elements['name'].value;
      const email = form.elements['email'].value;
      const category = form.elements['category'].value;
      const message = form.elements['message'].value;

      const subject = `【HP問い合わせ】${category} - ${name}様`;
      const body = `名前: ${name}\nメールアドレス: ${email}\n問い合わせ内容: ${category}\n\n本文:\n${message}`;

      window.location.href = `mailto:ogane.kogyo01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
      <div className="min-h-screen bg-black text-white py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">CONTACT & RECRUIT</h2>
            <p className="text-yellow-500 font-bold tracking-widest">お問い合わせ・応募</p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div>
            <p className="mt-8 text-gray-400">
              求人への応募、お仕事のご依頼など、お気軽にお問い合わせください。<br />
              下のフォームに入力して送信ボタンを押すと、メールソフトが起動します。
            </p>
          </div>

          <div className="bg-gray-900 p-8 md:p-12 rounded-lg border border-gray-800 shadow-xl shadow-yellow-900/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">お名前 <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black border border-gray-700 text-white p-4 rounded focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black border border-gray-700 text-white p-4 rounded focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="your-email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
                <select
                  name="category"
                  className="w-full bg-black border border-gray-700 text-white p-4 rounded focus:outline-none focus:border-yellow-500 transition-colors mb-4"
                >
                  <option>求人への応募について</option>
                  <option>お仕事のご依頼について</option>
                  <option>その他</option>
                </select>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-black border border-gray-700 text-white p-4 rounded focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="ご質問や志望動機などをご記入ください。"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-bold text-lg py-4 rounded hover:bg-yellow-400 transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                メールを作成する
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center space-y-4">
              <div>
                <p className="text-gray-400 mb-2">お電話でのお問い合わせ</p>
                <a href="tel:0436-95-2063" className="text-2xl font-bold text-white hover:text-yellow-500 transition-colors flex items-center justify-center gap-2">
                  <Phone size={24} /> 0436-95-2063
                </a>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <Printer size={18} /> FAX: 0436-98-2799
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail size={18} /> ogane.kogyo01@gmail.com
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-2">受付時間：平日 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-widest mb-2">OGANE INDUSTRY</h2>
          <p className="text-sm">日本の建設の足場となれる会社を目指して。</p>
          <div className="mt-4 text-xs text-gray-500 space-y-1">
            <p>〒290-0243 千葉県市原市上高根1242</p>
            <p>TEL: 0436-95-2063 / FAX: 0436-98-2799</p>
          </div>
        </div>

        <div className="flex gap-6 text-sm font-bold">
          <button onClick={() => navigateTo('home')} className="hover:text-yellow-500 transition-colors">TOP</button>
          <button onClick={() => navigateTo('service')} className="hover:text-yellow-500 transition-colors">SERVICE</button>
          <button onClick={() => navigateTo('about')} className="hover:text-yellow-500 transition-colors">COMPANY</button>
          <button onClick={() => navigateTo('contact')} className="hover:text-yellow-500 transition-colors">CONTACT</button>
        </div>
      </div>
      <div className="text-center mt-10 text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Ogane Industry Co., Ltd. All Rights Reserved.
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-yellow-500 selection:text-black">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="text-2xl font-extrabold text-white tracking-tighter cursor-pointer flex items-center gap-3 group"
            onClick={() => navigateTo('home')}
          >
            {/* 左上ロゴ（提供画像） */}
            <img
              src={logo}
              alt="大鐘工業 ロゴ"
              className="h-10 w-10 object-cover rounded"
            />

            <div className="flex flex-col">
              <span className="text-xl leading-none tracking-widest font-black">OGANE</span>
              <span className="text-[0.6rem] text-gray-400 tracking-[0.2em] leading-none group-hover:text-yellow-500 transition-colors">INDUSTRY</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <NavLink page="home" label="TOP" />
            <NavLink page="service" label="SERVICE" />
            <NavLink page="about" label="COMPANY" />
            <button
              onClick={() => navigateTo('contact')}
              className="bg-yellow-500 text-black px-6 py-2 text-sm font-bold rounded hover:bg-yellow-400 transition-colors"
            >
              CONTACT / RECRUIT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-24 px-4 md:hidden">
          <div className="flex flex-col gap-2">
            <MobileNavLink page="home" label="TOP" />
            <MobileNavLink page="service" label="SERVICE" />
            <MobileNavLink page="about" label="COMPANY" />
            <MobileNavLink page="contact" label="CONTACT / RECRUIT" />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="pt-0">
        {currentPage === 'home' && <Hero />}
        {currentPage === 'service' && <Services />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer />

      {/* Tailwind Custom Animations for this file */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default function App() {
  return <OganeIndustryWebsite />;
}
