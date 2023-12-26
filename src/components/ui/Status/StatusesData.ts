import Approval from '../../../assets/statuses/approval.svg'
import Rejected from '../../../assets/statuses/rejected.svg'
import New from '../../../assets/statuses/new.svg'
import InProcess from '../../../assets/statuses/inProcess.svg'
import DocsApproval from '../../../assets/statuses/docsApproval.svg'
import Payment from '../../../assets/statuses/payment.svg'
import Waiting from '../../../assets/statuses/waiting.svg'
import Completed from '../../../assets/statuses/completed.svg'
import {StatusNames} from "./StatusNames.ts";

export const StatusesData: {[key in StatusNames]: {name: string, className: string, icon: string}} = {
    approval: { name: 'На согласовании', className: 'approval', icon: Approval },
    rejected: { name: 'Отклонено', className: 'rejected', icon: Rejected },
    new: { name: 'Новая', className: 'new', icon: New },
    inProcess: { name: 'В работе', className: 'inProcess', icon: InProcess },
    docsApproval: { name: 'Согласование документов', className: 'docsApproval', icon: DocsApproval },
    payment: { name: 'Оплата', className: 'payment', icon: Payment },
    waiting: { name: 'Ожидает обучения', className: 'waiting', icon: Waiting },
    completed: { name: 'Пройдено', className: 'completed', icon: Completed },
} as const;
