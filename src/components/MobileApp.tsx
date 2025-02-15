import React from 'react';
import { Apple, PlayCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MobileApp() {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">{t('mobile.title')}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t('mobile.subtitle')}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {t('mobile.description')}
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-all duration-300"
                >
                  <Apple className="h-5 w-5 mr-2" />
                  {t('mobile.appStore')}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-all duration-300"
                >
                  <PlayCircle className="h-5 w-5 mr-2" />
                  {t('mobile.playStore')}
                </a>
              </div>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">{t('mobile.feature1.title')}</dt>
                  <dd className="inline"> {t('mobile.feature1.description')}</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">{t('mobile.feature2.title')}</dt>
                  <dd className="inline"> {t('mobile.feature2.description')}</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">{t('mobile.feature3.title')}</dt>
                  <dd className="inline"> {t('mobile.feature3.description')}</dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
            alt="App screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}