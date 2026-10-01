import React, { useState } from 'react';
import { CheckCircle, Download, RefreshCw, ArrowRight, Phone } from 'lucide-react';

interface BookingSectionProps {
  preselectedService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService
}) => {
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    let added = 0;
    let dayOffset = 0; // Can book today for emergency

    while (added < 5) {
      const d = new Date(today);
      d.setDate(today.getDate() + dayOffset);
      dates.push({
        day: dayOffset === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' }),
        dateNum: d.getDate(),
        month: d.toLocaleDateString('en-US', { month: 'short' }),
        iso: d.toISOString().split('T')[0],
      });
      added++;
      dayOffset++;
    }
    return dates;
  };

  const dates = generateDates();
  const timeSlots = ['Immediate 24/7', '08:00 AM - 12:00 PM', '12:00 PM - 04:00 PM', '04:00 PM - 08:00 PM'];
  const disciplines = [
    'Drain Cleaning & Hydro-Jetting',
    'Trenchless Sewer Repair',
    'Water Heater & Tankless',
    '24/7 Emergency & Slab Leaks'
  ];

  const [selectedDiscipline, setSelectedDiscipline] = useState<string>(
    preselectedService || disciplines[0]
  );
  const [selectedDate, setSelectedDate] = useState<string>(dates[0]?.iso || '');
  const [selectedTime, setSelectedTime] = useState<string>(timeSlots[0]);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);

  React.useEffect(() => {
    if (preselectedService) setSelectedDiscipline(preselectedService);
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setConfirmed(true);
  };

  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Rooter Hero Plumbing//EN',
      'BEGIN:VEVENT',
      `UID:RH-${Date.now()}@rooterhero.com`,
      `SUMMARY:Rooter Hero Plumbing Dispatch — ${selectedDiscipline}`,
      `DESCRIPTION:Plumbing service appointment for ${fullName} at ${address || 'customer location'}. 24/7 Dispatch Hotline: (866) 941-8214`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `RooterHero-Service-${selectedDate}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="book" className="py-20 border-t border-[#d0d8e4] bg-[#f5f7fb]/30">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-headline-lg text-[#1e1e1e]">
              Schedule Service
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#5a6271]">
            <span>24/7 Emergency Line:</span>
            <a href="tel:8669418214" className="text-[#1e1e1e] font-semibold flex items-center gap-1 hover:underline">
              <Phone className="w-3.5 h-3.5" />
              <span>(866) 941-8214</span>
            </a>
          </div>
        </div>

        {/* Minimal Booking Box */}
        <div className="brixora-card !p-6 sm:!p-10 max-w-2xl bg-white">
          {!confirmed ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Service Choice */}
              <div>
                <span className="text-xs font-mono text-[#5a6271] block mb-3">
                  SERVICE NEEDED
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {disciplines.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDiscipline(d)}
                      className={`p-2.5 rounded-[4px] text-xs font-medium border text-left transition-colors cursor-pointer ${
                        selectedDiscipline.includes(d) || d.includes(selectedDiscipline)
                          ? 'bg-[#1e1e1e] text-white border-[#1e1e1e]'
                          : 'bg-white text-[#1e1e1e] border-[#d0d8e4] hover:border-neutral-400'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <span className="text-xs font-mono text-[#5a6271] block mb-3">
                  SERVICE DATE
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {dates.map((d) => {
                    const isSelected = selectedDate === d.iso;
                    return (
                      <button
                        key={d.iso}
                        type="button"
                        onClick={() => setSelectedDate(d.iso)}
                        className={`p-2.5 rounded-[4px] text-center border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#1e1e1e] text-white border-[#1e1e1e]'
                            : 'bg-white text-[#1e1e1e] border-[#d0d8e4] hover:border-neutral-400'
                        }`}
                      >
                        <div className={`text-[10px] font-mono ${isSelected ? 'text-neutral-300' : 'text-[#5a6271]'}`}>
                          {d.day}
                        </div>
                        <div className="text-sm font-semibold mt-0.5">
                          {d.dateNum}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Window */}
              <div>
                <span className="text-xs font-mono text-[#5a6271] block mb-3">
                  PREFERRED ARRIVAL WINDOW
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-3 rounded-[4px] text-xs font-mono text-center border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#1e1e1e] text-white border-[#1e1e1e]'
                            : 'bg-white text-[#1e1e1e] border-[#d0d8e4] hover:border-neutral-400'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#f5f7fb] border border-[#d0d8e4] rounded-[4px] px-3 py-2 text-sm text-[#1e1e1e] focus:outline-none focus:border-[#1e1e1e]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number (e.g. 818-555-0199)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#f5f7fb] border border-[#d0d8e4] rounded-[4px] px-3 py-2 text-sm text-[#1e1e1e] focus:outline-none focus:border-[#1e1e1e]"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Service Address or City (e.g. Mission Hills, CA)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-[#f5f7fb] border border-[#d0d8e4] rounded-[4px] px-3 py-2 text-sm text-[#1e1e1e] focus:outline-none focus:border-[#1e1e1e]"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-brixora-primary w-full py-3 text-sm cursor-pointer"
              >
                <span>Reserve Service Dispatch</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <div className="text-center text-[11px] font-mono text-[#5a6271]">
                Zero Overtime Fees · Upfront Flat-Rate Pricing · Licensed & Insured
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-medium text-[#1e1e1e]">
                Dispatch Reserved for {fullName}
              </h3>
              <p className="text-xs font-mono text-[#5a6271]">
                {selectedDate} · {selectedTime} · {selectedDiscipline}
              </p>
              <p className="text-xs text-[#5a6271] max-w-sm mx-auto">
                A Rooter Hero Plumbing dispatch coordinator is notifying the nearest technician to {address || 'your location'}.
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={downloadIcs}
                  className="btn-brixora-primary text-xs !min-w-[120px] flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>.ics reminder</span>
                </button>
                <button
                  onClick={() => setConfirmed(false)}
                  className="btn-brixora-secondary text-xs !min-w-[100px] flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
