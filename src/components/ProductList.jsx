import React, { useState } from 'react';

const ProductList = () => {
  const [activeTab, setActiveTab] = useState('ABB');

  const brands = ['ABB', 'Schneider', 'Siemens'];

  const productData = {
    ABB: [
      { model: 'Formula（A塑壳）', type: 'Molded case circuit breaker' },
      { model: 'S200', type: 'Miniature circuit breaker' },
      { model: 'S800/SD200', type: 'Miniature circuit breaker' },
      { model: 'CPX', type: 'Control switch' },
      { model: 'AX', type: 'Contactor' },
      { model: 'AF09-AF300', type: 'Contactor' },
      { model: 'AF400-AF750', type: 'Contactor', voltage: '100-250V AC/DC' },
      { model: 'AF750以上', type: 'Contactor', voltage: '100-250V AC/DC' },
      { model: 'A', type: 'Contactor' },
      { model: 'UA', type: 'Contactor' },
      { model: 'CR / CT / CM', type: 'Button/Relay' },
      { model: 'OTM 20D / DPT / ATS', type: 'ATS' },
      { model: 'OTM 12D / 21D / 8D / 3D / 10D / 11D', type: 'ATS' },
      { model: 'DSP', type: 'Molded case circuit breaker' },
      { model: 'XTmax', type: 'Molded case circuit breaker' },
      { model: 'Tmax', type: 'Molded case circuit breaker' },
      { model: 'SH200', type: 'Miniature circuit breaker' },
      { model: 'SF200', type: 'Miniature circuit breaker' },
      { model: 'SE200', type: 'Miniature circuit breaker' },
      { model: 'OT/OS', type: 'Isolation switch' },
      { model: 'TOR', type: 'Press thermal relay' },
      { model: 'MS116/132/165', type: 'Motor starter' },
      { model: 'EPR-CT/CM/CR/CP/PD', type: 'Motor starter' },
      { model: 'POD/OVR', type: 'Surge protector' },
      { model: 'RVC/RVT/电容电抗', type: 'Capacitance' },
      { model: 'XLP/OFAFC', type: 'Fuses' },
      { model: 'VD4/HE', type: 'Medium voltage circuit breaker' },
      { model: 'Emax 2', type: 'Frame circuit breaker' },
    ],
    Schneider: [
      { model: 'Easy 9', type: 'Miniature circuit breaker' },
      { model: 'Acti 9', type: 'Miniature circuit breaker' },
      { model: 'OSM', type: 'Miniature circuit breaker' },
      { model: 'CVS', type: 'Molded case circuit breaker' },
      { model: 'NSX', type: 'Molded case circuit breaker' },
      { model: 'NSXm', type: 'Molded case circuit breaker' },
      { model: 'EZD', type: 'Molded case circuit breaker' },
      { model: 'NSC', type: 'Molded case circuit breaker' },
      { model: 'RXM-L型', type: 'Relay' },
      { model: 'LC1D (Made in China)', type: 'Contactor' },
      { model: 'LC1D (Import)', type: 'Contactor' },
      { model: 'LC1N', type: 'Contactor' },
      { model: 'Vario负荷开关', type: 'Vario Load switch' },
      { model: 'GV2 (Import)', type: 'Motor protector' },
      { model: 'GV2 (Made in China)', type: 'Motor protector' },
      { model: 'XB2B', type: 'Switch' },
      { model: 'XB4', type: 'Switch' },
      { model: 'XB5', type: 'Switch' },
      { model: 'XA2', type: 'Switch' },
      { model: 'XVU', type: 'Source' },
      { model: 'ABL8', type: 'Source' },
      { model: 'ABL6', type: 'Source' },
      { model: 'ABL2', type: 'Source' },
      { model: 'RXM-非L型', type: 'Relay' },
      { model: 'RXZ继电器附件', type: 'Relay' },
      { model: 'MT', type: 'Frame circuit breaker' },
      { model: 'MTZ', type: 'Frame circuit breaker' },
      { model: 'NS', type: 'Frame circuit breaker' },
      { model: 'MVS', type: 'Frame circuit breaker' },
      { model: '万高WG', type: 'Isolation switch' },
      { model: 'WGR', type: 'Isolation switch' },
      { model: 'WATSN', type: 'ATS' },
      { model: 'WATSG', type: 'ATS' },
      { model: 'WTS', type: 'ATS' },
      { model: 'IPRU/IST/EA9L/IPRF1', type: 'Surge protector' },
      { model: 'ISCB', type: 'Surge protector' },
    ],
    Siemens: [
      { model: '3RT50/60, 3RH59/69, 3RT59/69', type: 'Contactor' },
      { model: '3RV50/53/54/60/63/64, 3RV59/69', type: 'Motor protector' },
      { model: '3RU51/61, 3RU59/69', type: 'Overload relay' },
      { model: '8WU46', type: 'Accessory' },
      { model: '3RQ0', type: 'Relay' },
      { model: '3SB6', type: 'Push button' },
      { model: '3VT9', type: 'Circuit breaker' },
      { model: '3VT8', type: 'Circuit breaker' },
      { model: '3LD', type: 'Switch' },
      { model: '5SP4 重载型MCB(进口)', type: 'Miniature circuit breaker' },
      { model: '5ST3 系列用于MCB的电气附件(进口)', type: 'Accessory' },
      { model: '5ST3 系列用于MCB的电气附件(本地)', type: 'Accessory' },
      { model: '5SU9', type: 'Leakage circuit breaker' },
      { model: '5SU1', type: 'Leakage circuit breaker' },
      { model: '5SV8', type: 'Arc fault detection' },
      { model: '5SL/5SY', type: 'Miniature circuit breaker' },
      { model: '3VA/3VM', type: 'Circuit breaker' },
      { model: '3SU1', type: 'Push button' },
      { model: '3RW40', type: 'Soft starter' },
      { model: '3RW50', type: 'Soft starter' },
      { model: '3RW30', type: 'Soft starter' },
      { model: '3RQ3', type: 'Relay' },
      { model: '3SE', type: 'Switch' },
      { model: '3RH61', type: 'Contactor' },
      { model: '8WD', type: 'Signal element' },
      { model: '3NA', type: 'Fuse' },
      { model: '3NC', type: 'Fuse' },
      { model: '3NE', type: 'Fuse' },
      { model: '3KC', type: 'Transfer switching device' },
      { model: '3KD', type: 'Transfer switching device' },
      { model: '8UD', type: 'Timing relay' },
      { model: '4NC', type: 'Contactor' },
    ],
  };

  return (
    <section className="section-lg bg-default">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveTab(brand)}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded transition-all duration-200 ${
                activeTab === brand
                  ? 'bg-sky-700 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-sky-700 text-white">
                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">Model</th>
                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">Type</th>
              </tr>
            </thead>
            <tbody>
              {productData[activeTab].map((product, index) => (
                <tr
                  key={product.model}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-sky-50 transition-colors duration-150`}
                >
                  <td className="px-4 py-3 text-sm md:text-base font-medium text-gray-800">
                    {product.model}
                  </td>
                  <td className="px-4 py-3 text-sm md:text-base text-gray-600">
                    {product.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          For more product information, please contact us.
        </p>
      </div>
    </section>
  );
};

export default ProductList;
