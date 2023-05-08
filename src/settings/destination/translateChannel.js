const translate = require('@iamtraction/google-translate');

async function translateChannel (client, reaction, user) {
	const message = await reaction.message.fetch();

	let translated = "";

	if (reaction.emoji.name == '🇵🇹' || reaction.emoji.name == '🇧🇷') {
		reaction.remove();
		try {
			if (message.content == "") translated = "Mensagem vazia";
			translated = await translate(message.content, {to: 'pt'});
			translated = translated.text;
		} catch (error) {
			translated = "Erro ao traduzir a mensagem";
		}
	}
	
	else if (reaction.emoji.name == '🏴󠁧󠁢󠁥󠁮󠁧󠁿' || reaction.emoji.name == '🇺🇸' || reaction.emoji.name == '🇦🇺') {
		reaction.remove();
		try {
			if (message.content == "") translated = "Empty message";
			translated = await translate(message.content, {to: 'en'});
			translated = translated.text;
		} catch (error) {
			translated = "Error translating message";
		}
	}
	
	else if (reaction.emoji.name == '🇫🇷') {
		reaction.remove();
		try {
			if (message.content == "") translated = "Le message est vide";
			translated = await translate(message.content, {to: 'fr'});
			translated = translated.text;
		} catch (error) {
			translated = "Erreur de traduction du message";
		}
	}
	
	else if (reaction.emoji.name == '🇨🇳') {
		reaction.remove();
		try {
			if (message.content == "") translated = "消息为空";
			translated = await translate(message.content, {to: 'zh-cn'});
			translated = translated.text;
		} catch (error) {
			translated = "翻译消息时出错";
		}				
	}
	
	else if (reaction.emoji.name == '🇻🇳') {
		reaction.remove();
		try {
			if (message.content == "") translated = "Tin nhắn trống";
			translated = await translate(message.content, {to: 'vi'});
			translated = translated.text;
		} catch (error) {
			translated = "Lỗi dịch tin nhắn";
		}				
	}
	
	else if (reaction.emoji.name == '🇪🇸') {
		reaction.remove();
		try {
			if (message.content == "") translated = "El mensaje está vacío";
			translated = await translate(message.content, {to: 'es'});
			translated = translated.text;
		} catch (error) {
			translated = "Error al traducir el mensaje";
		}				
	}

	else if (reaction.emoji.name == '🇩🇪') {
		reaction.remove();
		try {
			if (message.content == "") translated = "Die Nachricht ist leer";
			translated = await translate(message.content, {to: 'de'});
			translated = translated.text;
		} catch (error) {
			translated = "Fehler beim Übersetzen der Nachricht";
		}				
	}

	else if (reaction.emoji.name == '🇦🇪') {
		reaction.remove();
		try {
			if (message.content == "") translated = "الرسالة فارغة";
			translated = await translate(message.content, {to: 'ar'});
			translated = translated.text;
		} catch (error) {
			translated = "خطأ في ترجمة الرسالة";
		}				
	}

	else if (reaction.emoji.name == '🇷🇺') {
		reaction.remove();
		try {
			if (message.content == "") translated = "Сообщение пусто";
			translated = await translate(message.content, {to: 'ru'});
			translated = translated.text;
		} catch (error) {
			translated = "Ошибка перевода сообщения";
		}				
	}

	else if (reaction.emoji.name == '🇯🇵') {
		reaction.remove();
		try {
			if (message.content == "") translated = "メッセージが空です";
			translated = await translate(message.content, {to: 'ja'});
			translated = translated.text;
		} catch (error) {
			translated = "メッセージの翻訳中にエラーが発生しました";
		}
	}

	else if (reaction.emoji.name == '🇮🇹') {
		reaction.remove();
		try {
			if (message.content == "") translated = "Il messaggio è vuoto";
			translated = await translate(message.content, {to: 'it'});
			translated = translated.text;
		} catch (error) {
			translated = "Errore nella traduzione del messaggio";
		}
	}

	else if (reaction.emoji.name == '🇰🇵' || reaction.emoji.name == '🇰🇷') {
		reaction.remove();
		try {
			if (message.content == "") translated = "메시지가 비어 있습니다.";
			translated = await translate(message.content, {to: 'ko'});
			translated = translated.text;
		} catch (error) {
			translated = "메시지 번역 오류";
		}
	}

	else if (reaction.emoji.name == '🇲🇾') {
		reaction.remove();
		try {
			if (message.content == "") translated = "Mesej kosong";
			translated = await translate(message.content, {to: 'ms'});
			translated = translated.text;
		} catch (error) {
			translated = "Ralat menterjemah mesej";
		}
	}

	else if (reaction.emoji.name == '🇳🇴') {
		reaction.remove();
		try {
			if (message.content == "") translated = "Meldingen er tom";
			translated = await translate(message.content, {to: 'no'});
			translated = translated.text;
		} catch (error) {
			translated = "Feil ved oversettelse av meldingen";
		}
	}

	if (translated != "") reaction.message.channel.send(translated);
}

module.exports = {
	translateChannel
}