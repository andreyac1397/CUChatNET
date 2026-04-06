(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/contexts/AppContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const DEFAULT_ADMIN_CONFIG = {
    maxGroupSize: 500,
    messageTimeout: 24,
    maxFileSize: 100,
    maintenanceMode: false,
    e2eRequired: true,
    autoArchiveInactivity: 90
};
const DEFAULT_SECURITY_POLICY = {
    blockAfterFailedAttempts: 5,
    blockDuration: 15,
    keyRotationDays: 90,
    enableDeviceDetection: true,
    enableIdentityVerification: true,
    requireE2EEncryption: true,
    suspiciousLoginTimeout: 30
};
const AppProvider = ({ children })=>{
    _s();
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('landing');
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clientTab, setClientTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('chats');
    const [adminTab, setAdminTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [currentChatId, setCurrentChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentGroupId, setCurrentGroupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contacts, setContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [states, setStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mutedContacts, setMutedContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adminUsers, setAdminUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adminLogs, setAdminLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adminConfig, setAdminConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_ADMIN_CONFIG);
    const [securityPolicy, setSecurityPolicy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_SECURITY_POLICY);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalContent, setModalContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Helper functions to create chats and groups
    const createDirectChat = (contactId, contactName, contactPhoto)=>{
        const existingChat = chats.find((c)=>c.participantId === contactId && !c.isGroup);
        if (existingChat) {
            setCurrentChatId(existingChat.id);
            return;
        }
        const contact = contacts.find((c)=>c.id === contactId);
        const newChat = {
            id: `chat-${contactId}-${Date.now()}`,
            participantId: contactId,
            participantName: contactName,
            participantPhoto: contactPhoto,
            participantDescription: contact?.description,
            participantStatus: contact?.status,
            lastMessage: 'Sin mensajes aún',
            lastMessageTime: new Date().toISOString(),
            unread: 0,
            pinned: false,
            archived: false,
            isGroup: false,
            silenced: false
        };
        const updatedChats = [
            ...chats,
            newChat
        ];
        setChats(updatedChats);
        setCurrentChatId(newChat.id);
    };
    const createGroupChat = (groupName, memberIds, groupPhoto, groupDescription)=>{
        const groupId = `group-${Date.now()}`;
        // Get selected members details
        const groupMembers = memberIds.map((memberId)=>{
            const contact = contacts.find((c)=>c.id === memberId);
            return {
                id: memberId,
                name: contact?.name || 'Unknown',
                role: 'member'
            };
        });
        // Add current user as admin
        if (currentUser) {
            groupMembers.unshift({
                id: currentUser.id,
                name: currentUser.name,
                role: 'admin'
            });
        }
        // Create group
        const newGroup = {
            id: groupId,
            name: groupName,
            photo: groupPhoto || '👥',
            description: groupDescription,
            rules: '',
            members: groupMembers,
            createdAt: new Date().toISOString(),
            creatorId: currentUser?.id || '',
            permissions: {
                sendMessages: 'all',
                editInfo: 'admins'
            }
        };
        // Create associated chat
        const newChat = {
            id: groupId,
            participantId: groupId,
            participantName: groupName,
            participantPhoto: groupPhoto || '👥',
            lastMessage: 'Grupo creado recientemente',
            lastMessageTime: new Date().toISOString(),
            unread: 0,
            pinned: false,
            archived: false,
            isGroup: true,
            silenced: false
        };
        setGroups([
            ...groups,
            newGroup
        ]);
        setChats([
            ...chats,
            newChat
        ]);
        setCurrentChatId(newChat.id);
    };
    // Load from localStorage on mount
    const loadFromLocalStorage = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const saved = localStorage.getItem('cuchatnet_state');
            const savedUser = localStorage.getItem('cuchatnet_currentUser');
            if (savedUser) {
                setCurrentUser(JSON.parse(savedUser));
            }
            if (saved) {
                const data = JSON.parse(saved);
                if (data.chats) setChats(data.chats);
                if (data.groups) setGroups(data.groups);
                if (data.contacts) setContacts(data.contacts);
                if (data.states) setStates(data.states);
                if (data.messages) setMessages(data.messages);
                if (data.mutedContacts) setMutedContacts(data.mutedContacts);
                if (data.adminUsers) setAdminUsers(data.adminUsers);
                if (data.adminLogs) setAdminLogs(data.adminLogs);
                if (data.adminConfig) setAdminConfig(data.adminConfig);
                if (data.securityPolicy) setSecurityPolicy(data.securityPolicy);
            }
            setIsLoaded(true);
        } catch (e) {
            console.error('Failed to load from localStorage', e);
            setIsLoaded(true);
        }
    };
    // Save to localStorage
    const saveToLocalStorage = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            if (currentUser) {
                localStorage.setItem('cuchatnet_currentUser', JSON.stringify(currentUser));
            }
            const state = {
                chats,
                groups,
                contacts,
                states,
                messages,
                mutedContacts,
                adminUsers,
                adminLogs,
                adminConfig,
                securityPolicy
            };
            localStorage.setItem('cuchatnet_state', JSON.stringify(state));
        } catch (e) {
            console.error('Failed to save to localStorage', e);
        }
    };
    // Load on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            loadFromLocalStorage();
        }
    }["AppProvider.useEffect"], []);
    // Save whenever state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if (isLoaded) {
                saveToLocalStorage();
            }
        }
    }["AppProvider.useEffect"], [
        currentUser,
        chats,
        groups,
        contacts,
        states,
        messages,
        mutedContacts,
        adminUsers,
        adminLogs,
        adminConfig,
        securityPolicy,
        isLoaded
    ]);
    // 🔄 Sincronizar chats cuando el usuario actual cambia su perfil
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if (!currentUser) return;
            setChats({
                "AppProvider.useEffect": (prevChats)=>prevChats.map({
                        "AppProvider.useEffect": (chat)=>chat.participantId === currentUser.id ? {
                                ...chat,
                                participantName: currentUser.name,
                                participantPhoto: currentUser.photo,
                                participantDescription: currentUser.description,
                                participantStatus: currentUser.status
                            } : chat
                    }["AppProvider.useEffect"])
            }["AppProvider.useEffect"]);
        }
    }["AppProvider.useEffect"], [
        currentUser
    ]);
    const showToast = (message, type)=>{
        setToast({
            message,
            type
        });
        setTimeout(()=>setToast(null), 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: {
            currentView,
            setCurrentView,
            currentUser,
            setCurrentUser,
            isAdmin,
            setIsAdmin,
            clientTab,
            setClientTab,
            adminTab,
            setAdminTab,
            currentChatId,
            setCurrentChatId,
            currentGroupId,
            setCurrentGroupId,
            chats,
            setChats,
            groups,
            setGroups,
            contacts,
            setContacts,
            states,
            setStates,
            messages,
            setMessages,
            mutedContacts,
            setMutedContacts,
            adminUsers,
            setAdminUsers,
            adminLogs,
            setAdminLogs,
            adminConfig,
            setAdminConfig,
            securityPolicy,
            setSecurityPolicy,
            showModal,
            setShowModal,
            modalContent,
            setModalContent,
            toast,
            setToast,
            showToast,
            loadFromLocalStorage,
            saveToLocalStorage,
            createDirectChat,
            createGroupChat
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/AppContext.tsx",
        lineNumber: 426,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AppProvider, "zpaauK6dlgqwBMcFV+djs3Hbf6o=");
_c = AppProvider;
const useApp = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};
_s1(useApp, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AppProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/messages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMessages",
    ()=>getMessages,
    "sendMessage",
    ()=>sendMessage,
    "updateMessageStatus",
    ()=>updateMessageStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "https://localhost:7086";
async function getMessages(chatId) {
    try {
        const res = await fetch(`${API_URL}/api/chats/${chatId}/messages`);
        if (!res.ok) {
            throw new Error("Error al obtener mensajes");
        }
        return await res.json();
    } catch (error) {
        console.error("getMessages error:", error);
        return [];
    }
}
async function sendMessage(chatId, data) {
    try {
        const res = await fetch(`${API_URL}/api/chats/${chatId}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error("Error al enviar mensaje");
        }
        return await res.json();
    } catch (error) {
        console.error("sendMessage error:", error);
        return null;
    }
}
async function updateMessageStatus(messageId, status) {
    try {
        const res = await fetch(`${API_URL}/api/messages/${messageId}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status
            })
        });
        if (!res.ok) {
            throw new Error("Error al actualizar estado");
        }
        return await res.json();
    } catch (error) {
        console.error("updateMessageStatus error:", error);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AppContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Landing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Landing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthScreens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AuthScreens.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatInterface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatInterface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AdminDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AdminDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AppContent() {
    _s();
    const { currentView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            currentView === 'landing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Landing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Landing"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 15,
                columnNumber: 37
            }, this),
            currentView === 'login' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthScreens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginScreen"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 16,
                columnNumber: 35
            }, this),
            currentView === 'verify-sms' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthScreens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerifySmsScreen"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 17,
                columnNumber: 40
            }, this),
            currentView === 'profile-setup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthScreens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileSetupScreen"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 18,
                columnNumber: 43
            }, this),
            currentView === 'chat' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatInterface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInterface"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 19,
                columnNumber: 34
            }, this),
            currentView === 'admin-login' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthScreens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminLoginScreen"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 20,
                columnNumber: 41
            }, this),
            currentView === 'admin-dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AdminDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminDashboard"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 21,
                columnNumber: 45
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(AppContent, "QQVO7HKNjLboWwmLVQUtCxVImUk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = AppContent;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContent, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c1 = Page;
var _c, _c1;
__turbopack_context__.k.register(_c, "AppContent");
__turbopack_context__.k.register(_c1, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9179f10f._.js.map