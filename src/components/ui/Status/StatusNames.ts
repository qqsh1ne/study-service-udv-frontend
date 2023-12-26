export enum StatusNames {
    Approval = 'approval',
    Rejected = 'rejected',
    New = 'new',
    InProcess = 'inProcess',
    DocsApproval = 'docsApproval',
    Payment = 'payment',
    Waiting = 'waiting',
    Completed = 'completed'
};

export const StatusNamesToNums = Object.keys(StatusNames).map((name) => StatusNames[name as keyof typeof StatusNames]);
