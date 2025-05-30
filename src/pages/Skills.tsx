import { Fade } from 'react-awesome-reveal';

const skillCards = [
	{
		icon: '🌐',
		iconBg: 'bg-[#232b39]',
		color: 'text-cyan-400',
		title: 'FRONTEND',
		skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
	},
	{
		icon: '🗄️',
		iconBg: 'bg-[#232b39]',
		color: 'text-green-400',
		title: 'BACKEND',
		skills: ['Python', 'Java', 'Django'],
	},
	{
		icon: '🛢️',
		iconBg: 'bg-[#232b39]',
		color: 'text-pink-500',
		title: 'DATABASE',
		skills: ['MongoDB', 'PostgreSQL', 'LiveSQL'],
	},
	{
		icon: '🔗',
		iconBg: 'bg-[#232b39]',
		color: 'text-red-500',
		title: 'DEVOPS',
		skills: ['Docker', 'AWS', 'Git', 'Linux'],
	},
	{
		icon: '</>',
		iconBg: 'bg-[#232b39]',
		color: 'text-white',
		title: 'LANGUAGES',
		skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#'],
	},
];

const cardFont = {
	fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif',
	fontWeight: 'bold',
};

const Skills = () => (
	<Fade triggerOnce={true}>
		<div className="relative flex w-full max-w-7xl flex-col items-center justify-center px-32 py-24 my-24 mx-auto">
			<h2
				className="mb-2 text-3xl font-bold tracking-widest text-green-400"
				style={{
					fontFamily: 'Press Start 2P, monospace',
					letterSpacing: 2,
					textShadow: '2px 2px 0 #000, 0 0 2px #000',
				}}
			>
				{'<SKILLS />'}
			</h2>
			<div className="mb-12 h-1 w-32 rounded bg-green-400" />
			<div className="grid w-full max-w-6xl grid-cols-1 gap-24 mb-10 md:grid-cols-3">
				{/* Top row: Frontend, Backend, Database */}
				{skillCards.slice(0, 3).map((card) => (
					<div
						key={card.title}
						className="border-2 border-white bg-[#0a0f1c] flex flex-col p-8 min-w-[280px]"
						style={{ borderRadius: 0 }}
					>
						<div className="mb-5 flex items-center">
							<div
								className={`mr-5 flex h-14 w-14 items-center justify-center border-2 border-white ${card.iconBg}`}
								style={{ borderRadius: 0 }}
							>
								<span className="text-2xl" style={cardFont}>
									{card.icon}
								</span>
							</div>
							<span className={`text-2xl ${card.color}`} style={cardFont}>
								{card.title}
							</span>
						</div>
						<ul className="flex flex-col gap-3 w-full">
							{card.skills.map((skill) => (
								<li
									key={skill}
									className="flex items-center bg-[#111827] px-4 py-2 text-base text-white"
									style={{ ...cardFont, borderRadius: 0 }}
								>
									<span
										className="mr-3 inline-block h-2.5 w-2.5 rounded-full"
										style={{
											backgroundColor: 'rgb(22 163 74)',
										}}
									/>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="grid w-full max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
				{/* Bottom row: DevOps, Languages */}
				{skillCards.slice(3).map((card) => (
					<div
						key={card.title}
						className="border-2 border-white bg-[#0a0f1c] flex flex-col p-8 min-w-[280px]"
						style={{ borderRadius: 0 }}
					>
						<div className="mb-5 flex items-center">
							<div
								className={`mr-5 flex h-14 w-14 items-center justify-center border-2 border-white ${card.iconBg}`}
								style={{ borderRadius: 0 }}
							>
								<span className="text-2xl" style={cardFont}>
									{card.icon}
								</span>
							</div>
							<span className={`text-2xl ${card.color}`} style={cardFont}>
								{card.title}
							</span>
						</div>
						<ul className="flex flex-col gap-3 w-full">
							{card.skills.map((skill) => (
								<li
									key={skill}
									className="flex items-center bg-[#111827] px-4 py-2 text-base text-white"
									style={{ ...cardFont, borderRadius: 0 }}
								>
									<span
										className="mr-3 inline-block h-2.5 w-2.5 rounded-full"
										style={{
											backgroundColor: 'rgb(22 163 74)',
										}}
									/>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	</Fade>
);

export default Skills;