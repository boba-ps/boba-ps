import * as MailTextContent_proto from "./MailTextContent"

import * as MailItem_proto from "./MailItem"

export interface MailData {
	mailId?: number;
	mailTextContent?: MailTextContent_proto.MailTextContent;
	itemList?: MailItem_proto.MailItem[];
	sendTime?: number;
	expireTime?: number;
	importance?: number;
	isRead?: boolean;
	isAttachmentGot?: boolean;
	configId?: number;
	argumentList?: string[];
}

