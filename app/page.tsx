import { Metadata } from 'next';
import menuData from '@/public/menu-data.json';
import QRCode from 'qrcode';

export const metadata: Metadata = {
  title: `${menuData.restaurant.name} - Menu`,
  description: menuData.restaurant.tagline,
};

async function generateQRCode(url: string): Promise<string> {
  try {
    return await QRCode.toDataURL(url, { width: 200, margin: 2 });
  } catch (err) {
    console.error('QR Code generation failed:', err);
    return '';
  }
}

export default async function MenuPage() {
  const { restaurant, menu } = menuData;
  const qrCodeDataUrl = restaurant.reviewUrl 
    ? await generateQRCode(restaurant.reviewUrl)
    : '';

  return (
    <div 
      className="min-h-screen py-8 px-4"
      style={{ backgroundColor: restaurant.colors.background }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          {restaurant.logo && (
            <img 
              src={restaurant.logo} 
              alt={`${restaurant.name} logo`}
              className="mx-auto mb-4 max-w-[200px] h-auto"
            />
          )}
          <h1 
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ color: restaurant.colors.primary }}
          >
            {restaurant.name}
          </h1>
          <p className="text-lg md:text-xl text-amber-800/80">
            {restaurant.tagline}
          </p>
        </header>

        {/* Menu Sections */}
        <div className="space-y-12">
          {menu.sections.map((section, sectionIdx) => (
            <section key={sectionIdx} className="border-t-2 border-amber-200 pt-8">
              <h2 
                className="text-3xl font-bold mb-6 text-center"
                style={{ color: restaurant.colors.primary }}
              >
                {section.name}
              </h2>
              
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="bg-white/50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-amber-900 flex-1">
                        {item.name}
                      </h3>
                      <span 
                        className="text-xl font-bold whitespace-nowrap"
                        style={{ color: restaurant.colors.primary }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p className="text-amber-800/90 text-base leading-relaxed mb-2">
                      {item.description}
                    </p>
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 py-1 bg-amber-100 text-amber-900 text-sm rounded-full font-medium"
                          >
                            {tag.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* QR Code Section */}
        {qrCodeDataUrl && (
          <div className="mt-16 pt-8 border-t-2 border-amber-200 text-center">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">
              Enjoyed your meal?
            </h3>
            <p className="text-amber-800/90 mb-4">
              Scan to leave us a review!
            </p>
            <img 
              src={qrCodeDataUrl} 
              alt="Review QR Code"
              className="mx-auto w-[200px] h-[200px]"
            />
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-amber-200 text-center">
          <p className="text-xs text-amber-700/60">
            Powered by <span className="font-semibold">MenuReady</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
