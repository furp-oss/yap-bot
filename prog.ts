import { auto } from './common/auto';
import { randomOf } from './common/random';
import { Described } from './common/result';
import { BotIds } from './ids';

class Language extends Described {}

const languages: Language[] = [
	new Language('JavaScript', '🤡'),
	new Language('Haskell', 'ну давай, расскажи что такое монада'),
	new Language('Holy C', 'госпади спаси'),
	new Language('R', 'профессор кислых щей'),
	new Language('Ruby', 'ложись под поезд (Rails)'),
	new Language('Solidity', 'признавайся, сколько наскамил на своём защекоине?'),
	new Language('PureScript', '50 проектов на Github, 0 вакансий на HH'),
	// new Language('TypeScript (JavaScript)', 'язык без спецификации'),
	new Language('C++', '«Кресты́» — бывший следственный изолятор в Санкт-Петербурге, один из наиболее известных и крупных в России'),
	new Language('C#', 'Java, можно домашку списать? - Да, только не копируй точь-в-точь'),
	new Language('F#', 'OCaml, можно домашку списать? - Да, только не копируй точь-в-точь'),
	new Language('C', 'Никогда не забываешь ключи от дома потому, что помнишь, где оставил указатель'),
	new Language('Rust', '50 игровых движков - 5 игр'),
	new Language('COBOL', 'динозавр'),
	new Language('OCaml', 'в фейсбуке работаешь?'),
	new Language('CoffeeScript', 'спасибо за стрелочные функции в JS!!!!'),
	new Language('Delphi', 'кто то ещё помнит что такое RAD?'),
	new Language('Dart', 'интересно когда рендеринг в Flutter пофиксят?'),
	new Language('Erlang', 'ты работаешь в WhatsApp'),
	new Language('Go', 'бреешь хомячка пока хвастаешься производительностью своего микросервиса в Docker'),
	new Language('Java', 'public static void main(String[] args)'),
	new Language('Kotlin', 'JetBrains верните лицензии в России!!'),
	new Language('Objective C', 'молишься на Стива БлоуДжобса'),
	new Language('Swift', 'можешь задать переменной имя "🍑"'),
	new Language('Fortran', 'попал под пенсионную реформу?'),
	new Language('Pascal', 'ты в 9ом классе на уроке информатики'),
	new Language('Scala', 'нет бл*ть скала ⛰️'),
	new Language('JSON', 'стетхем'),
	new Language('HTML', 'чё он тут делает?'),
	new Language('CSS', 'кс сорс'),
	new Language('YAML', 'девопс, ты попался, разлогинься'),
	new Language('Bash', 'i use arch btw'),
	new Language('Lua', 'ты либо делаешь моды на роблокс, либо психопат'),
	new Language('Vim', 'психопат, обновись до neovim'),
	new Language('Python', '<s>🏳️‍🌈 петухон</s>, извините, язык на котором написана половина мира'),
	new Language('SQL', '💉💉 Пошла аналитика'),
	new Language('PHP', 'всё ещё сидишь на LAMP стаке'),
	new Language('Хинди', 'भारतीय मुझसे हेनतई के लिए नहीं पूछते'),
	new Language('YoptaScript', 'язык для чётких пацанов'),
	new Language('Assembly', 'mov %your %ass'),
	new Language('Машинный код', '01101001 01100100 01101001 00100000 01101110 01100001 01101000 01110101 01101001'),
];

export const prog = auto(BotIds.PROG, {
	command: 'lang',
	getRandom: () => randomOf(languages)!,

	text: {
		solo: '💻 Ты язык программирования:',
		group: '💻 Я язык программирования:',
		help: 'Чтобы узнать какой ты язык программирования',
	},
	article: {
		title: 'Какой ты язык программирования?',
		description: 'Петухон или хинди?',
		image: {
			url: 'https://www.shutterstock.com/image-illustration/python-programming-language-logo-lgbt-600nw-2283908249.jpg',
			width: 600,
			height: 600,
		},
	},
});
