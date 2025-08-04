'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#665EFF] to-[#6B57FF] bg-clip-text text-transparent">
                FACIOT
              </span>
                             <Link href="/" className="text-gray-600 hover:text-[#665EFF] transition-colors">
                 Ana Sayfa
               </Link>
            </div>
                         <div className="flex items-center space-x-4">
               <span className="text-sm text-gray-600">Gebze</span>
               <div className="flex items-center space-x-2">
                 <span className="text-sm text-gray-600">{formatDate(currentTime)}</span>
                 <i className="ri-calendar-line text-gray-400"></i>
               </div>
               <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                 <i className="ri-user-line text-gray-600"></i>
               </div>
             </div>
          </div>
        </div>
      </nav>

      {/* Status and Last Update */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">PLC Bağlantısı: Bağlı</span>
          </div>
          <div className="text-sm text-gray-600">
            Son güncelleme: {formatTime(currentTime)}
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Uyarılar</h3>
        <div className="flex flex-wrap gap-3">
          {[
            { text: 'Hız yavaşlıyor', color: 'bg-orange-100 text-orange-800' },
            { text: 'Hız yavaşlıyor', color: 'bg-orange-100 text-orange-800' },
            { text: 'Hız yavaşlıyor', color: 'bg-red-100 text-red-800' },
            { text: 'Vibrasyon artıyor', color: 'bg-orange-100 text-orange-800' },
            { text: 'Vibrasyon artıyor', color: 'bg-orange-100 text-orange-800' },
            { text: 'Basınç düşük', color: 'bg-orange-100 text-orange-800' },
            { text: 'Malzeme tükeniyor', color: 'bg-orange-100 text-orange-800' },
            { text: 'Sıcaklık kritik seviyede', color: 'bg-red-100 text-red-800' },
            { text: 'Sıcaklık kritik seviyede', color: 'bg-red-100 text-red-800' },
          ].map((alert, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${alert.color}`}
            >
              {alert.text}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Target vs Actual Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Hedef vs Gerçekleşen</h3>
            <div className="relative h-64 flex flex-col justify-end">
              {/* Chart Container */}
              <div className="flex items-end justify-center space-x-16 h-48">
                {/* Target Bar */}
                <div className="flex flex-col items-center">
                  <div className="w-16 bg-blue-500 rounded-t-lg" style={{ height: '196px' }}></div>
                </div>
                {/* Actual Bar */}
                <div className="flex flex-col items-center">
                  <div className="w-16 bg-green-500 rounded-t-lg" style={{ height: '140px' }}></div>
                </div>
              </div>
              {/* X-axis label */}
              <div className="flex justify-center mt-2">
                <span className="text-sm text-gray-600">Bugün</span>
              </div>
            </div>
            {/* Legend */}
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Hedef</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Gerçekleşen</span>
              </div>
            </div>
          </div>

          {/* OEE Breakdown */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">OEE Breakdown</h3>
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Donut Chart */}
                <svg width="200" height="200" className="transform -rotate-90">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="20"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="20"
                    strokeDasharray={`${2 * Math.PI * 80 * 0.75} ${2 * Math.PI * 80}`}
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="20"
                    strokeDasharray={`${2 * Math.PI * 80 * 0.94} ${2 * Math.PI * 80}`}
                    strokeDashoffset={`-${2 * Math.PI * 80 * 0.75}`}
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="20"
                    strokeDasharray={`${2 * Math.PI * 80 * 0.95} ${2 * Math.PI * 80}`}
                    strokeDashoffset={`-${2 * Math.PI * 80 * (0.75 + 0.94)}`}
                  />
                </svg>
                
                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">67%</div>
                    <div className="text-sm text-gray-600">OEE</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* OEE Components */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-600">Kullanılabilirlik</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">75%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm text-gray-600">Performans</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">94%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-600">Kalite</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 