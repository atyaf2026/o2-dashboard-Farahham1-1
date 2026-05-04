'use client';

import { Activity, Database, Cloud, HardDrive } from 'lucide-react';

export default function SystemHealth({ className = '' }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          {/* Live Indicator على اليسار */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2 py-0.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-600">Live</span>
            </div>
          </div>
          {/* العنوان والفقرة على اليمين */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-50 rounded-lg">
              <Activity className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-right">
              <h3 className="font-semibold text-gray-900 text-sm">System Health</h3>
              <p className="text-xs text-gray-500">Real-time monitor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="space-y-4">
          {/* Database Engine */}
          <div className="flex items-center justify-between">
            <div className="px-2 py-0.5 bg-green-50 rounded-full border border-green-200">
              <span className="text-green-700 text-xs font-medium">OPTIMAL</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-gray-700 text-xs font-medium">Database</span>
            </div>
          </div>

          {/* API Gateway */}
          <div className="flex items-center justify-between">
            <div className="px-2 py-0.5 bg-green-50 rounded-full border border-green-200">
              <span className="text-green-700 text-xs font-medium">OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-gray-700 text-xs font-medium">API Gateway</span>
            </div>
          </div>

          {/* Asset Storage */}
          <div className="flex items-center justify-between">
            <div className="px-2 py-0.5 bg-orange-50 rounded-full border border-orange-200">
              <span className="text-orange-600 text-xs font-medium">HIGH LOAD</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-gray-700 text-xs font-medium">Storage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}