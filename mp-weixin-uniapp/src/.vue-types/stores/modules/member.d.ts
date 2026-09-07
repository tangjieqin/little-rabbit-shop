export interface MemberInfo {
    id: string;
    name: string;
    avatar?: string;
    phone?: string;
    token: string;
}
/**
 * 用户会员状态管理store
 * 使用Pinia进行状态管理，提供会员信息的读取、更新和持久化功能
 */
export declare const useUserMemberStore: import("pinia").StoreDefinition<"userMember", import("pinia")._UnwrapAll<Pick<{
    profile: import("vue").Ref<{
        id: string;
        name: string;
        avatar?: string | undefined;
        phone?: string | undefined;
        token: string;
    } | null>;
    isLogin: import("vue").ComputedRef<boolean>;
    setProfile: (info: MemberInfo) => void;
    updateProfile: (partial: Partial<MemberInfo>) => void;
    clearProfile: () => void;
}, "profile">>, Pick<{
    profile: import("vue").Ref<{
        id: string;
        name: string;
        avatar?: string | undefined;
        phone?: string | undefined;
        token: string;
    } | null>;
    isLogin: import("vue").ComputedRef<boolean>;
    setProfile: (info: MemberInfo) => void;
    updateProfile: (partial: Partial<MemberInfo>) => void;
    clearProfile: () => void;
}, "isLogin">, Pick<{
    profile: import("vue").Ref<{
        id: string;
        name: string;
        avatar?: string | undefined;
        phone?: string | undefined;
        token: string;
    } | null>;
    isLogin: import("vue").ComputedRef<boolean>;
    setProfile: (info: MemberInfo) => void;
    updateProfile: (partial: Partial<MemberInfo>) => void;
    clearProfile: () => void;
}, "setProfile" | "updateProfile" | "clearProfile">>;
