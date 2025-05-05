import Image from "next/image";

export default function OurValues() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl  text-center mb-12">
          <span className="text-[#008000]">Our</span> Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Image src={'/about/handshake.png'} height={50} width={50} alt="icon"/>,
              title: 'Honesty and Integrity',
              desc: 'We are committed to promote high standards of honesty and integrity by being fair, honest, transparent and ethical in our conduct and actions.'
            },
            {
              icon: <Image src={'/homepage/smile-beam icon.png'} height={50} width={50} alt="icon"/>,
              title: 'Caring',
              desc: 'Caring deeply and sincerely about the wellbeing and success of each person.'
            },
            {
              icon: <Image src={'/homepage/fast service icon.png'} height={50} width={50} alt="icon"/>,
              title: 'Empowering',
              desc: 'Enabling our people to lead, make decisions that improve work process and benefit our customers & company.'
            },
            {
              icon: <Image src={'/about/team.png'} height={50} width={50} alt="icon"/>,
              title: 'Team Work',
              desc: 'Building strong performance teams based on trust, integrity and mutual benefit to make a difference in every community we serve.'
            },
            {
              icon: <Image src={'/homepage/mdi_like.png'} height={50} width={50} alt="icon"/>,
              title: 'Excellence',
              desc: 'We will be passionate about achieving the highest standards of quality, always promoting intelligence and new techniques.'
            },
            {
              icon: <Image src={'/about/fist.png'} height={50} width={50} alt="icon"/>,
              title: 'Unity',
              desc: 'We will invest in our people and partners, enable continuous learning and build collaborative relationships based on honesty and consistency.'
            },
          ].map((value, index) => (
            <div key={index} className="border border-[#008000] rounded-xl p-6 text-center shadow-sm bg-white">
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
